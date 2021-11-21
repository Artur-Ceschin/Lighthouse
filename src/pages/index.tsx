import { useState } from 'react';
import {
  Box,
  Divider,
  Stack,
  useBreakpointValue,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { useHeaderDrawer } from '../context/HeaderContextDrawer';
import { RiMenuLine } from 'react-icons/ri';
import { DrawerIcon } from '../components/DrawerIcon';

export default function Home() {
  return (
    <Box
      maxWidth="90%"
      borderRadius="lg"
      borderWidth="1px"
      bg="gray.200"
      mx="auto"
      mt="10"
      boxShadow="dark-lg"
      minHeight="90vh"
    >
      <DrawerIcon />
      <Header />
      <Box>
        <Form />
      </Box>
    </Box>
  );
}
