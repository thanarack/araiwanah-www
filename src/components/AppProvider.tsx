'use client';

import React, { StrictMode } from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../store';
import 'dayjs/locale/th';
import '../../styles/globals.css';
import '../../styles/markdown.css';

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
    heading: `'Noto Sans Thai', sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial`,
    body: `'Noto Sans Thai', sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial`,
  },
  shadows: {
    navbarHeader: '0 1px 1px rgba(0,0,0, 0.1)',
    navbarCard: '0 0 0 1px rgba(23, 23, 23, 0.1)',
  },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

export default AppProvider;
