import {
  Flex,
  Input,
  Grid,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Icon,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import { RiPhoneFill } from 'react-icons/ri';

export function Form() {
  return (
    <Box w="100%" maxWidth={1480} h="20" mx="auto" mt="4" align="center" px="6">
      <Text fontSize="xl" fontWeight="bold" my="8">
        Cadastrar pessoas em vulnerabilidade
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <FormControl>
          <FormLabel color="red.600">Nome</FormLabel>
          <Input
            placeholder="Enter your email address"
            borderColor="gray.900"
            _hover={{ textDecoration: 'none' }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="red.600">Telefone</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={RiPhoneFill} color="gray.600" />}
            />
            <Input
              type="tel"
              placeholder="Telefone"
              borderColor="gray.900"
              _hover={{ textDecoration: 'none' }}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel color="red.600">CEP</FormLabel>
          <Input
            type="number"
            placeholder="0000-000"
            borderColor="gray.900"
            _hover={{ textDecoration: 'none' }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="red.600">Endereço</FormLabel>
          <Input
            placeholder="Enter your email address"
            borderColor="gray.900"
            _hover={{ textDecoration: 'none' }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="red.600">Bairro</FormLabel>
          <Input
            placeholder="Rua em que você está"
            borderColor="gray.900"
            _hover={{ textDecoration: 'none' }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="red.600">Cidade</FormLabel>
          <Input
            placeholder="Sua cidade"
            borderColor="gray.900"
            _hover={{ textDecoration: 'none' }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="red.600">Ponto de referência</FormLabel>
          <Input
            placeholder="Rua em que você está"
            borderColor="gray.900"
            _hover={{ textDecoration: 'none' }}
          />
        </FormControl>
        <ButtonGroup justifyContent="center">
          <Button
            mt="8"
            bg="red.600"
            color="white"
            w="80%"
            _hover={{ bg: 'red.600' }}
          >
            Avançar
          </Button>
        </ButtonGroup>
      </Grid>
    </Box>
  );
}
