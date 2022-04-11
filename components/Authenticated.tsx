import { FC, ReactElement } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useLoggingIn } from '../hooks/auth/useLoggingIn';

interface AuthenticatedProps {
  fallback?: ReactElement;
}

export const Authenticated: FC<AuthenticatedProps> = ({
  children,
  fallback = null,
}) => {
  const { isLoggingIn, isLoggedIn, error } = useLoggingIn();

  if (isLoggingIn)
    return (
      <Spinner
        thickness="3px"
        speed="0.4s"
        color="elvenTools.color2.base"
        size="md"
        mt={3}
      />
    );

  if (error) {
    console.log(error);
    return null;
  }

  if (!isLoggedIn) return fallback;

  return <>{children}</>;
};
