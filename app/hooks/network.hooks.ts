import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {authState} from '../recoils/AuthRecoil';
import {AuthTokens} from '../type/auth';
import {SERVER_HOST} from '../constants/url.constants';

type AxiosOption = {
  disableInitialRequest: boolean;
};

export const useAxios = async <R>(requestConfig: AxiosRequestConfig) => {
  const {response, error, loading} = useAxiosPromise<R>(requestConfig);

  return {
    response: await response,
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
