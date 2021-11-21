import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { HeaderContextDrawerProvider } from '../context/HeaderContextDrawer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderContextDrawerProvider>
        <Component {...pageProps} />;
      </HeaderContextDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
