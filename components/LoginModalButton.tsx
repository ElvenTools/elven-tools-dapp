import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ActionButton } from '../components/ActionButton';
import { LoginComponent } from '../components/LoginComponent';
import { useEffectOnlyOnUpdate } from '../hooks/tools/useEffectOnlyOnUpdate';
import { useLogin } from '../hooks/auth/useLogin';
import { useLogout } from '../hooks/auth/useLogout';

interface LoginModalButtonProps {
  onClose?: () => void;
  onOpen?: () => void;
}

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const LoginModalButton: FC<LoginModalButtonProps> = ({
  onClose,
  onOpen,
}) => {
  const { isLoggedIn, isLoggingIn } = useLogin();
  const { logout } = useLogout();
  const {
    isOpen: opened,
    onOpen: open,
    onClose: close,
  } = useDisclosure({ onClose, onOpen });

  //Redirect to home when logged out
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  useEffectOnlyOnUpdate(() => {
    if (isLoggedIn) {
      close();
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <ActionButton onClick={handleLogout}>Disconnect</ActionButton>
      ) : (
        <ActionButton onClick={open}>Connect</ActionButton>
      )}
      <Modal isOpen={opened} size="sm" onClose={close} isCentered>
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
            <Text textAlign="center" mb={7} fontWeight="black" fontSize="2xl">
              Connect you wallet
            </Text>
            {isLoggingIn && (
              <Flex
                alignItems="center"
                backdropFilter="blur(3px)"
                bgColor="blackAlpha.700"
                justifyContent="center"
                position="absolute"
                inset={0}
              >
                <Spinner
                  thickness="3px"
                  speed="0.4s"
                  color="elvenTools.color2.base"
                  size="xl"
                />
              </Flex>
            )}
            <LoginComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
