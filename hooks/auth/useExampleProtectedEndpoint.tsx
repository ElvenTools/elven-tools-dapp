import { ApiQueryType, useApiQuery } from '../interaction/useApiQuery';
import { useLoginInfo } from './useLoginInfo';

export const useExampleProtectedEndpoint = () => {
  const { jwt } = useLoginInfo();

  useApiQuery({
    path: '/api/protected/example',
    type: ApiQueryType.GET,
    headers: {
      authorization: `Bearer ${jwt?.accessToken}`,
    },
    autoInit: Boolean(jwt),
  });
};
