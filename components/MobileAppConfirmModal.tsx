import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useEffectOnlyOnUpdate } from '../hooks/tools/useEffectOnlyOnUpdate';

interface MobileAppConfirmModalProps {
  isOpen: boolean;
}

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const MobileAppConfirmModal: FC<MobileAppConfirmModalProps> = ({
  isOpen = false,
}) => {
  const { isOpen: opened, onOpen, onClose } = useDisclosure();

  useEffectOnlyOnUpdate(() => {
    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={opened} size="sm" onClose={onClose} isCentered>
      <CustomModalOverlay />
      <ModalContent
        bgColor="elvenTools.dark.darker"
        px={6}
        pt={7}
        pb={10}
        position="relative"
      >
        <ModalCloseButton _focus={{ outline: 'none' }} />
        <ModalBody>
          <Text textAlign="center" fontWeight="semibold" fontSize="xl">
            Sign the transaction using Maiar mobile app!
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
