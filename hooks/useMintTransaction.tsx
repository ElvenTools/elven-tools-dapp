import {
  ContractFunction,
  U32Value,
  ContractCallPayloadBuilder,
  TokenTransfer,
} from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';
import { useElvenScQuery } from './useElvenScQuery';
import {
  SCQueryType,
  useTransaction,
  TransactionCallbackParams,
} from '@useelven/core';

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;
const mintTxBaseGasLimit = Number(process.env.NEXT_PUBLIC_MINT_BASE_GAS_LIMIT);
const mintFunctionName = process.env.NEXT_PUBLIC_MINT_FUNCTION_NAME;

export function useMintTransaction(
  cb?: (params: TransactionCallbackParams) => void
) {
  const { data: tokenSellingPrice } = useElvenScQuery<number>({
    funcName: 'getNftPrice',
    type: SCQueryType.NUMBER,
  });

  const { pending, triggerTx, txResult, error } = useTransaction({ cb });

  const mint = async (tokensAmount: number) => {
    const tokens = tokensAmount || 1;
    if (!tokenSellingPrice) {
      Promise.reject(new Error("The token selling price couldn't be fetched!"));
      return;
    }
    const totalPayment = new BigNumber(tokenSellingPrice).times(tokens);
    if (Number.isNaN(mintTxBaseGasLimit)) {
      Promise.reject(
        new Error(
          'Plese provide the mint transaction base limit using env variables!'
        )
      );
      return;
    }
    if (!mintFunctionName) {
      Promise.reject(
        new Error('Plese provide the mint endpoint name using env variables!')
      );
      return;
    }

    if (!smartContractAddress) {
      Promise.reject(
        new Error('Plese provide the mint endpoint name using env variables!')
      );
      return;
    }

    const data = new ContractCallPayloadBuilder()
      .setFunction(new ContractFunction(mintFunctionName))
      .setArgs([new U32Value(tokens)])
      .build();

    triggerTx({
      address: smartContractAddress,
      gasLimit:
        mintTxBaseGasLimit + (mintTxBaseGasLimit / 2) * (tokensAmount - 1),
      value: TokenTransfer.egldFromBigInteger(totalPayment),
      data,
    });
  };

  return {
    pending,
    mint,
    txResult,
    error,
  };
}
