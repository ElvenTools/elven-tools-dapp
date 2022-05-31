import useSWR, { Fetcher } from 'swr';
import { apiCall } from '../../utils/apiCall';

export enum SCQueryType {
  INT = 'int',
  STRING = 'string',
}

interface SCQueryData {
  type: SCQueryType;
  payload?: Record<string, unknown>;
  options?: Record<string, unknown>;
  autoInit?: boolean;
}

interface FetcherArgs {
  url: SCQueryType;
  payload: Record<string, unknown>;
}

export interface VMOutput {
  data: { data: string | number };
  error: string;
  code: string;
}

export const fetcher: Fetcher<VMOutput, FetcherArgs> = async ({
  url,
  payload,
}) => await apiCall.post(url, payload);

export const useScQuery = ({
  type,
  payload,
  options,
  autoInit = true,
}: SCQueryData) => {
  let url = '';

  switch (type) {
    case SCQueryType.INT:
      url = '/vm-values/int';
      break;
    case SCQueryType.STRING:
      url = '/vm-values/string';
      break;
  }

  const { data, error, mutate } = useSWR(
    autoInit ? { url, payload } : null,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      ...options,
    }
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
};
