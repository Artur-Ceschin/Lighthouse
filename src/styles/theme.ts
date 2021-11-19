import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'red.500',
        color: 'gray.900',
      },
    },
  },
  fonts: {
    body: 'Inter',
    headings: 'Inter',
  },
});
