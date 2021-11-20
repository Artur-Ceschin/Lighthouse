import { useState } from 'react';
import { Box, Divider, Stack } from '@chakra-ui/react';
import { Form } from '../components/Form';
import { Header } from '../components/Header';

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
      <Header />
      <Stack
        borderWidth={1}
        borderColor="gray.300"
        marginX="10"
        marginTop="5"
      ></Stack>
      <Box>
        <Form />
      </Box>
    </Box>
  );
}
