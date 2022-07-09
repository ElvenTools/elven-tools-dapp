// This hook is responsible of querying the Elven Tools smart contract
// It uses the generic useScQuery hook
// For docs on smart contract endpoints check: https://www.elven.tools/docs/sc-endpoints.html

import { useScQuery, SCQueryType } from '../useScQuery';

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;

interface ScConfigDataArgs {
  funcName: string;
  type: SCQueryType;
  args?: string[];
  autoInit?: boolean;
}

export function useElvenScQuery<T extends string | number | boolean>({
  funcName,
  type,
  args = [],
  autoInit = true,
}: ScConfigDataArgs) {
  const { data, isLoading, fetch } = useScQuery<T>({
    type,
    payload: {
      scAddress: smartContractAddress,
      funcName,
      args,
    },
    autoInit,
  });

  return {
    data,
    isLoading,
    fetch,
  };
}
