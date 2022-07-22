import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState, useRecoilState} from 'recoil';
import {authState} from '../recoils/AuthRecoil';
import {AuthTokens} from '../type/auth';
import {SERVER_HOST} from '../constants/url.constants';
import {Alert} from 'react-native';
import {userState} from '../recoils/UserRecoil';
import {heroState} from '../recoils/HeroRecoil';
import {LocalStorage} from '../storage/local.storage';
import {getTokenState} from '../utils/auth.util';


type IsRefreshInErrorType = 'UnSelect' | 'SelectRefresh' | 'CancleRefresh';
type AxiosOption = {
  disableInitialRequest: boolean;
};

export const useAxios = <R>(requestConfig: AxiosRequestConfig) => {
  const [response, setResponse] = useState<R>();
  const {
    response: promiseResponse,
    error,
    loading,
    refetch,
  } = useAxiosPromise<R>(requestConfig);

  useEffect(() => {
    void promiseResponse?.then(r => {
      setResponse(r.data);
    });
  }, [promiseResponse]);

  return {
    response,
    error,
    loading,
    refetch,
  };
};

export const useAxiosPromise = <R>(
  paramAxiosConfig: AxiosRequestConfig,
  options: AxiosOption = {
    disableInitialRequest: false,
  },
) => {
  const [response, setResponse] = useState<Promise<AxiosResponse<R>>>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);
  const [isRefreshInError, setisRefreshInError] =
    useState<IsRefreshInErrorType>('UnSelect');
  const [currentAxiosConfig, setCurrentAxiosConfig] = useState<
    AxiosRequestConfig | undefined
  >(undefined);
  const [tokens, setAuthState] = useRecoilState(authState);
  const setUser = useSetRecoilState(userState);
  const setHero = useSetRecoilState(heroState);
  const {refreshRefetch} = useRefreshPromise<AuthTokens>();

  const fetchData = (axiosConfig: AxiosRequestConfig) => {
    const url = axiosConfig.url || '';

    axiosConfig.url = url.startsWith('http') ? url : SERVER_HOST + url;
    try {
      setLoading(true);

      const result = axios.request({
        timeout: 5000,
        ...axiosConfig,
        headers: {
          Authorization: tokens.accessToken && `Bearer ${tokens.accessToken}`,
          ...axiosConfig.headers,
        },
      });
      setResponse(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.disableInitialRequest) {
      return;
    }
    const tokenState = getTokenState(tokens);
    if (tokenState == 'Expire') {
      if (tokens.accessToken == '') {
        void fetchData(paramAxiosConfig);
      } else {
        resetLoginStatus();
      }
    } else if (tokenState == 'Use') {
      void fetchData(paramAxiosConfig);
    } else if (tokenState == 'Refresh') {
      setCurrentAxiosConfig(paramAxiosConfig);
      refreshLogic();
    }
  }, []);

  useEffect(() => {
    if (currentAxiosConfig == undefined) return;

    if (isRefreshInError == 'UnSelect') return;
    else if (isRefreshInError == 'SelectRefresh') refreshLogic();
    else resetLoginStatus();
  }, [isRefreshInError, currentAxiosConfig]);

  useEffect(() => {
    if (currentAxiosConfig == undefined) return;
    const tokenState = getTokenState(tokens);

    if (tokenState == 'Use') {
      void fetchData(currentAxiosConfig);
    }
  }, [tokens]);

  const refreshLogic = () => {
    void refreshRefetch()
      .then(res => {
        const token = res.data;
        setAuthState(token);
        LocalStorage.set('authToken', JSON.stringify(token));
      })
      .catch(err => {
        const status: number = err.response?.status;

        if (400 <= status && status < 500) {
          resetLoginStatus();
        } else if (500 <= status) {
          Alert.alert(
            '네트워크 문제',
            '네트워크 연결을 다시 시도하시겠습니까?',
            [
              {
                text: '확인',
                onPress: () => {
                  setisRefreshInError('SelectRefresh');
                },
              },
              {
                text: '취소',
                onPress: () => {
                  setisRefreshInError('CancleRefresh');
                },
              },
            ],
          );
        }
      });
  };

  const resetLoginStatus = () => {
    resetRecoil();
    removeLocalStroage();
  };

  const resetRecoil = () => {
    setUser(undefined);
    setHero({
      heroNo: -1,
      heroName: '',
      heroNickName: '',
      imageURL: undefined,
      birthday: undefined,
      title: undefined,
    });
    setAuthState({
      accessToken: '',
      accessTokenExpireAt: new Date(),
      refreshToken: '',
      refreshTokenExpireAt: new Date(),
    });
  };

  const removeLocalStroage = () => {
    LocalStorage.delete('authToken');
    LocalStorage.delete('useNo');
  };

  return {
    response,
    error,
    loading,
    refetch: (newRequestConfig: Partial<AxiosRequestConfig>) => {
      const tokenState = getTokenState(tokens);
      const currentAxiosConfig = {
        ...paramAxiosConfig,
        ...newRequestConfig,
      };
      if (tokenState == 'Expire') {
        if (tokens.accessToken == '') {
          void fetchData(currentAxiosConfig);
        } else {
          resetLoginStatus();
        }
      } else if (tokenState == 'Use') {
        void fetchData(currentAxiosConfig);
      } else if (tokenState == 'Refresh') {
        setCurrentAxiosConfig(currentAxiosConfig);
        refreshLogic();
      }
    },
  };
};

export const useRefreshPromise = <R>(
  options: AxiosOption = {
    disableInitialRequest: false,
  },
) => {
  const tokens = useRecoilValue<AuthTokens>(authState);

  const fetchRefreshToken = () => {
    const url = `${SERVER_HOST}/auth/refresh`;
    const result = axios.request({
      timeout: 5000,
      method: 'post',
      url: url,
      headers: {
        Authorization: tokens.refreshToken && `Bearer ${tokens.refreshToken}`,
      },
    });
    return result;
  };

  useEffect(() => {
    if (!options.disableInitialRequest) {
      return;
    }
    void fetchRefreshToken();
  }, []);

  return {
    refreshRefetch: () => {
      return fetchRefreshToken();
    },
  };
};