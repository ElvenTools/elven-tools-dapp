import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useElrondNetworkSync } from '../hooks/auth/useElrondNetworkSync';
import { theme } from '../config/chakraTheme';
import { SWRConfig } from 'swr';
import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

const toastId = 'elven-tools-error-toast';

const ElvenToolsDapp = ({ Component, pageProps }: AppProps) => {
  useElrondNetworkSync();
  const toast = useToast();

  const handleErrorToast = useCallback(() => {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        variant: 'subtle',
        title: 'API error!',
        description:
          'The API is not responding at the moment. Please try later.',
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
    }
  }, [toast]);

  return (
    <SWRConfig value={{ onError: handleErrorToast }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
};

export default ElvenToolsDapp;
