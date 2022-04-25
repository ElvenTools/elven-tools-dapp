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
import { useAccessToken } from '../hooks/auth/useAccessToken';

const ElvenToolsDapp = ({ Component, pageProps }: AppProps) => {
  useElrondNetworkSync();
  useAccessToken();
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default ElvenToolsDapp;
