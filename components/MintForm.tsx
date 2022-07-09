import { useMintTransaction } from '../hooks/interaction/elvenScHooks/useMintTransaction';
import { useCallback, FC, useState } from 'react';
import { ActionButton } from './ActionButton';
import { ScTransactionCb } from '../hooks/interaction/useScTransaction';
import { useLoginInfo } from '../hooks/auth/useLoginInfo';
import { LoginMethodsEnum } from '../types/enums';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
} from '@chakra-ui/react';
import { TransactionPendingModal } from './core/TransactionPendingModal';

interface MintFormProps {
  leftToMintForUser: number;
  cb?: (params: ScTransactionCb) => void;
}

export const MintForm: FC<MintFormProps> = ({ leftToMintForUser, cb }) => {
  const [amount, setAmount] = useState(1);
  const { mint, pending, transaction, error } = useMintTransaction(cb);
  const { loginMethod } = useLoginInfo();

  const handleMint = useCallback(() => {
    mint(amount);
  }, [amount, mint]);

  const setAmountHandler = useCallback(
    (valueAsString: string, valueAsNumber: number) => setAmount(valueAsNumber),
    []
  );

  const getAdditionalPendingMessage = () => {
    if (loginMethod === LoginMethodsEnum.walletconnect) {
      return 'Sign the transaction using Maiar mobile app. It will take some time to finish. You can always close this message. You will get the transaction hash when finished.';
    }
    if (loginMethod === LoginMethodsEnum.ledger) {
      return 'Sign the transaction using Ledger HW. It will take some time to finish. You can always close this message. You will get the transaction hash when finished.';
    }
    return 'It will take some time to finish. You can always close this message. You will get the transaction hash when finished.';
  };

  return (
    <>
      <Box
        display="flex"
        gap={5}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
        <NumberInput
          maxW="100px"
          min={1}
          max={leftToMintForUser}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={5}
            _focus={{ outline: 'none' }}
            disabled={leftToMintForUser <= 0}
            placeholder="Amount of tokens to mint..."
          />
          {leftToMintForUser <= 0 ? null : (
            <NumberInputStepper>
              <NumberIncrementStepper borderColor="elvenTools.base.dark" />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
        </NumberInput>
        <ActionButton
          onClick={handleMint}
          disabled={pending || leftToMintForUser <= 0}
        >
          {pending ? 'Pending...' : 'Mint'}
        </ActionButton>
      </Box>
      <TransactionPendingModal
        isOpen={pending}
        successTxHash={transaction?.getHash().toString()}
        txError={error}
        additionalMessage={getAdditionalPendingMessage()}
      />
    </>
  );
};
