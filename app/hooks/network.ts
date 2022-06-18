import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {authState} from '../recoils/AuthRecoil';
import {AuthTokens} from '../type/auth';
import {SERVER_HOST} from '../constants/url.constants';

type AxiosOption = {
  disableInitialRequest: boolean;
};

export const useAxios = async <R>(axiosParams: AxiosRequestConfig) => {
  const {response, error, loading} = useAxiosPromise<R>(axiosParams);

  return {
    response: await response,
    error,
    loading,
  };
};

export const useAxiosPromise = <R>(
  axiosParams: AxiosRequestConfig,
  options: AxiosOption = {
    disableInitialRequest: false,
  },
) => {
  const [response, setResponse] = useState<Promise<AxiosResponse<R>>>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const tokens = useRecoilValue<AuthTokens>(authState);
  const url = axiosParams.url || '';

  const fetchData = (params: AxiosRequestConfig) => {
    try {
      const result = axios.request(params);
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

    void fetchData({
      timeout: 5000,
      ...axiosParams,
      url: url.startsWith('http') ? SERVER_HOST + url : url,
      headers: {
        Authorization: tokens.accessToken && `Bearer ${tokens.accessToken}`,
        ...axiosParams.headers,
      },
    });
  }, []);

  return {
    response,
    error,
    loading,
    refetch: (newRequestConfig: Partial<AxiosRequestConfig>) => {
      const newUrl = newRequestConfig.url || '';
      void fetchData({
        timeout: 5000,
        ...axiosParams,
        url: newUrl || url.startsWith('http') ? SERVER_HOST + url : url,
        headers: {
          Authorization: tokens.accessToken && `Bearer ${tokens.accessToken}`,
          ...axiosParams.headers,
        },
      });
    },
  };
};
