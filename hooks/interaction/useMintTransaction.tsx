import {
  GasLimit,
  ContractFunction,
  Balance,
  U32Value,
} from '@elrondnetwork/erdjs';
import {
  mintTxBaseGasLimit,
  mintFunctionName,
  tokenSellingPrice,
} from '../../config/nftSmartContract';
import { useScTransaction, ScTransactionCb } from './useScTransaction';

export function useMintTransaction(cb?: (params: ScTransactionCb) => void) {
  const { pending, triggerTx, transaction, error } = useScTransaction(cb);

  const mint = async (tokensAmount: number) => {
    const tokens = tokensAmount || 1;
    triggerTx({
      func: new ContractFunction(mintFunctionName),
      gasLimit: new GasLimit(
        mintTxBaseGasLimit + (mintTxBaseGasLimit / 1.4) * (tokensAmount - 1)
      ),
      args: [new U32Value(tokens)],
      value: Balance.fromString(tokenSellingPrice).times(tokens),
    });
  };

  return {
    pending,
    mint,
    transaction,
    error,
  };
}
