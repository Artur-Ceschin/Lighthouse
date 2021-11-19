import { Box } from '@chakra-ui/react';
import { Form } from '../components/Form';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Box
      maxWidth="90%"
      borderRadius="lg"
      borderWidth="1px"
      bg="gray.200"
      height="80vh"
      mx="auto"
      mt="10"
      boxShadow="dark-lg"
    >
      <Header />
      <hr />
      <Form />
    </Box>
  );
}
