import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';
import 'dayjs/locale/th';
import '../styles/globals.css';

dayjs.extend(relativeTime);
dayjs.locale('th');

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'blackAlpha.50',
      },
    },
  },
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    link: {
      900: 'rgba(59, 73, 223)',
    },
  },
  fonts: {
    heading: `Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif`,
    body: `Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif`,
  },
  shadows: {
    navbarHeader: '0 1px 1px rgba(0,0,0, 0.1)',
    navbarCard: '0 0 0 1px rgba(23, 23, 23, 0.1)',
  },
});

function ThemeComponent({ Component, pageProps, router }: AppProps) {
  const props: any = { pageProps, router };

  return (
    <ChakraProvider theme={theme}>
      <Component {...props} />
    </ChakraProvider>
  );
}

const MyApp = (props: AppProps) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeComponent {...props} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default MyApp;
