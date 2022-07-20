import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {authState, isExpireState, isRefreshState} from '../recoils/AuthRecoil';
import {AuthTokens} from '../type/auth';
import {SERVER_HOST} from '../constants/url.constants';
import {ConstructionOutlined} from '@mui/icons-material';
import {Alert} from 'react-native';
import { userState } from '../recoils/UserRecoil';
import { heroState } from '../recoils/HeroRecoil';
import { LocalStorage } from '../storage/local.storage';
import { useRefreshLogic } from './refresh.logic.hook';

type AxiosOption = {
  disableInitialRequest: boolean;
};

export const useAxios = <R>(requestConfig: AxiosRequestConfig) => {
  const [response, setResponse] = useState<R>();

  const {
    response: promiseResponse,
    error,
    loading,
  } = useAxiosPromise<R>(requestConfig);

  void promiseResponse?.then(r => {
    setResponse(r.data);
  });

  return {
    response,
    error,
    loading,
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
  const tokens = useRecoilValue<AuthTokens>(authState);

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

    void fetchData(paramAxiosConfig);
  }, []);

  return {
    response,
    error,
    loading,
    refetch: (newRequestConfig: Partial<AxiosRequestConfig>) => {
      void fetchData({
        ...paramAxiosConfig,
        ...newRequestConfig,
      });
    },
  };
};

export const useRefreshPromise = <R>(isExpire: boolean) => {
  const [refreshResponse, setResponse] = useState<Promise<AxiosResponse<R>>>();
  const [refreshError, setError] = useState<AxiosError>();
  const tokens = useRecoilValue<AuthTokens>(authState);

  const fetchRefreshToken = () => {
    const url = `${SERVER_HOST}/auth/refresh`;
    try {
      const result = axios.request({
        timeout: 5000,
        method: 'post',
        url: url,
        headers: {
          Authorization: tokens.refreshToken && `Bearer ${tokens.refreshToken}`,
        },
      });

      setResponse(result);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (!isExpire) {
      return;
    }
    void fetchRefreshToken();
  }, []);

  return {
    refreshResponse,
    refreshError,
    refreshRefetch: () => {
      void fetchRefreshToken();
    },
  };
};
