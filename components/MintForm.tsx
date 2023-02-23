import { useMintTransaction } from '../hooks/useMintTransaction';
import { useCallback, FC, useState } from 'react';
import { ActionButton } from './ActionButton';
import {
  useLoginInfo,
  LoginMethodsEnum,
  TransactionCallbackParams,
} from '@useelven/core';
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
  cb?: (params: TransactionCallbackParams) => void;
}

export const MintForm: FC<MintFormProps> = ({ leftToMintForUser, cb }) => {
  const [amount, setAmount] = useState(1);
  const { mint, pending, txResult, error } = useMintTransaction(cb);
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
      return 'Sign the transaction using xPortal mobile app. It will take some time to finish. You can always close this message. You will get the transaction hash when finished.';
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
            _focusVisible={{ outline: 'none' }}
            disabled={leftToMintForUser <= 0}
            placeholder="Amount of tokens to mint..."
          />
          {leftToMintForUser <= 0 ? null : (
            <NumberInputStepper>
              <NumberIncrementStepper color="elvenTools.base.light" />
              <NumberDecrementStepper color="elvenTools.base.light" />
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
        successTxHash={txResult?.hash}
        txError={error}
        additionalMessage={getAdditionalPendingMessage()}
      />
    </>
  );
};
