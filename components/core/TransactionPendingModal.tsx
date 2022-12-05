import {
  Modal,
  Text,
  ModalContent,
  Flex,
  Spinner,
  ModalBody,
  useDisclosure,
  ModalOverlay,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react';
import { FC } from 'react';
import { networkConfig, chainType } from '../../config/network';
import { useEffectOnlyOnUpdate } from '../../hooks/tools/useEffectOnlyOnUpdate';
import { shortenHash } from '../../utils/shortenHash';
interface TransactionPendingModalProps {
  isOpen: boolean;
  successTxHash?: string;
  txError?: string;
  additionalMessage?: string;
}

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const TransactionPendingModal: FC<TransactionPendingModalProps> = ({
  isOpen = false,
  successTxHash,
  txError,
  additionalMessage,
}) => {
  const { isOpen: opened, onOpen, onClose } = useDisclosure();

  useEffectOnlyOnUpdate(() => {
    if (isOpen || successTxHash || txError) {
      onOpen();
    }
  }, [isOpen, successTxHash, txError]);

  const txTitle = () => {
    // TODO: refactor and improve catching errors (from ledger and standard ones)
    if (txError === 'Ledger device: UNKNOWN_ERROR (0x6e07)') {
      return 'Contract data disabled in app options. Please enable it on your Ledger device.';
    }
    if (
      txError ===
      'Ledger device: Condition of use not satisfied (denied by the user?) (0x6985)'
    ) {
      return 'Transaction was rejected by user.';
    }
    if (
      txError ===
      'Request error on url [transactions]: [{"statusCode":400,"message":""}]'
    ) {
      return "The transaction can't be processed. Check if there are funds on chosen wallet address.";
    }
    if (txError) {
      return `Transaction status: ${txError}.`;
    }
    if (successTxHash) {
      return 'Transaction success. Check explorer for details.';
    }
    return 'Transaction pending.';
  };

  return (
    <Modal isOpen={opened} size="sm" onClose={onClose} isCentered>
      <CustomModalOverlay />
      <ModalContent
        bgColor="ghostVerse.dark.darker"
        px={6}
        pt={7}
        pb={10}
        position="relative"
      >
        <ModalCloseButton _focus={{ outline: 'none' }} />
        <ModalBody>
          <Text textAlign="center" fontWeight="semibold" fontSize="xl">
            {txTitle()}
          </Text>

          {!txError && (
            <Flex alignItems="center" justifyContent="center" mt={2}>
              {successTxHash && (
                <Box display="flex" flexDirection="column">
                  <Text
                    as="a"
                    href={`${networkConfig[chainType].explorerAddress}/transactions/${successTxHash}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    p={2}
                    mb={4}
                    fontWeight="normal"
                    color="ghostVerse.color1.darker"
                    userSelect="none"
                    transition="background-color .3s"
                  >
                    {shortenHash(successTxHash)}
                  </Text>
                  <Text
                    as="a"
                    href="/profile"
                    borderColor="ghostVerse.color1.darker"
                    borderWidth={1}
                    bgColor="transparent"
                    p={2}
                    height="48px"
                    fontWeight="normal"
                    color="elvenTools.white"
                    userSelect="none"
                    textAlign="center"
                    lineHeight={2}
                    _hover={{ bg: 'GhostVerse.color1.lighter' }}
                    transition="background-color .3s"
                  >
                    My profile
                  </Text>
                </Box>
              )}
              {!successTxHash && !txError && (
                <Spinner
                  thickness="3px"
                  speed="0.4s"
                  color="elvenTools.color2.base"
                  size="xl"
                />
              )}
            </Flex>
          )}
          {additionalMessage && !successTxHash && !txError && (
            <Text textAlign="center" mt={5} fontWeight="semibold" fontSize="md">
              {additionalMessage}
            </Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
