import { ContractFunction, TokenPayment, U32Value } from '@elrondnetwork/erdjs';
import BigNumber from 'bignumber.js';
import { useScTransaction, ScTransactionCb } from '../useScTransaction';
import { useElvenScQuery } from '../elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../useScQuery';

const mintTxBaseGasLimit = Number(process.env.NEXT_PUBLIC_MINT_BASE_GAS_LIMIT);
const mintFunctionName = process.env.NEXT_PUBLIC_MINT_FUNCTION_NAME;

export function useMintTransaction(cb?: (params: ScTransactionCb) => void) {
  const { data: tokenSellingPrice } = useElvenScQuery<number>({
    funcName: 'getNftPrice',
    type: SCQueryType.NUMBER,
  });

  const { pending, triggerTx, transaction, error } = useScTransaction(cb);

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
    triggerTx({
      func: new ContractFunction(mintFunctionName),
      gasLimit:
        mintTxBaseGasLimit + (mintTxBaseGasLimit / 2) * (tokensAmount - 1),
      args: [new U32Value(tokens)],
      value: TokenPayment.egldFromBigInteger(totalPayment),
    });
  };

  return {
    pending,
    mint,
    transaction,
    error,
  };
}
