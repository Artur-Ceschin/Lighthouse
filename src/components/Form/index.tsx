import { useEffect, useState } from 'react';
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
  Textarea,
  Select,
  HStack,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';

import { RiPhoneFill } from 'react-icons/ri';
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../api';

type handlePostFormProps = {
  userReporter: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  location: {
    address: string;
    neighborhood: string;
    city: string;
    referencePoints: string;
    additionalLocationInfo: string;
  };
  numberOfPeople: number;
  isThereVisibleShelter: number;
  isThereWomen: number;
  isThereChildren: number;
  isThereThermalProtectionFromCold: number;
  medicalCareNeedsDescription: string;
  urgencyLevel: number;
};

export function Form() {
  const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const toast = useToast();

  const { register, handleSubmit, formState } = useForm<handlePostFormProps>();

  const [isNextFormOpen, setIsNextFormOpen] = useState(false);

  const createErrorToast = (errorMessage) => {
    toast({
      title: 'Erro',
      description: errorMessage,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  const validateForm = async (values) => {
    if (!values.userReporter.name || values.userReporter.name.length === 0) {
      createErrorToast('Preencha o nome.');
      setIsNextFormOpen(false);
      return false;
    }

    if (!values.userReporter.email || values.userReporter.email.length === 0) {
      createErrorToast('O e-mail é obrigatório.');
      setIsNextFormOpen(false);
      return false;
    }

    if (values.userReporter.email.length > 0) {
      if (regExEmail.test(values.userReporter.email) === false) {
        createErrorToast('O e-mail preenchido é inválido.');
        setIsNextFormOpen(false);
        return false;
      }
    }

    if (!values.location.address || values.location.address === 0) {
      createErrorToast(
        'Preencha o endereço (mesmo que seja um endereço aproximado).'
      );
      setIsNextFormOpen(true);
      return false;
    }

    return true;
  };

  const handlePostForm: SubmitHandler<handlePostFormProps> = async (values) => {
    values.isThereChildren = Number(values.isThereChildren);
    values.isThereWomen = Number(values.isThereWomen);
    values.isThereThermalProtectionFromCold = Number(
      values.isThereThermalProtectionFromCold
    );
    values.urgencyLevel = Number(values.urgencyLevel);
    values.numberOfPeople = Number(values.numberOfPeople);
    values.isThereVisibleShelter = Number(values.isThereVisibleShelter);

    if (!validateForm(values)) return;

    api
      .post('', values)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.message) {
          createErrorToast(error.response.data.message);
        }
      });
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(handlePostForm)}
      w="100%"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
    >
      {isNextFormOpen === false && (
        <Box>
          <Text fontSize="2xl" fontWeight="semi-bold" my="8" textAlign="center">
            Cadastrar pessoas em vulnerabilidade
          </Text>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <FormControl>
              <FormLabel color="red.600">Nome</FormLabel>
              <Input
                placeholder="Digite seu nome"
                borderColor="gray.900"
                _hover={{ textDecoration: 'none' }}
                {...register('userReporter.name')}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">Email</FormLabel>
              <Input
                placeholder="Digite seu email"
                borderColor="gray.900"
                _hover={{ textDecoration: 'none' }}
                {...register('userReporter.email')}
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
                  {...register('userReporter.phoneNumber')}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">Endereço</FormLabel>
              <Input
                placeholder="Digite seu endereço"
                borderColor="gray.900"
                _hover={{ textDecoration: 'none' }}
                {...register('location.address')}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">Bairro</FormLabel>
              <Input
                placeholder="Rua em que você está"
                borderColor="gray.900"
                _hover={{ textDecoration: 'none' }}
                {...register('location.neighborhood')}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">Cidade</FormLabel>
              <Input
                placeholder="Sua cidade"
                borderColor="gray.900"
                _hover={{ textDecoration: 'none' }}
                {...register('location.city')}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">Ponto de referência</FormLabel>
              <Input
                placeholder="Rua em que você está"
                borderColor="gray.900"
                _hover={{ textDecoration: 'none' }}
                {...register('location.referencePoints')}
              />
            </FormControl>
          </SimpleGrid>
          <FormControl marginTop="5">
            <FormLabel color="red.600">
              Informações adicionais do local
            </FormLabel>
            <Textarea
              borderColor="gray.900"
              placeholder="Descreva aqui observações do local em que você está"
              size="sm"
              {...register('location.additionalLocationInfo')}
              borderRadius={6}
            />
          </FormControl>

          <Flex justify="center">
            <Button
              onClick={() => setIsNextFormOpen(true)}
              my="8"
              bg="red.600"
              color="white"
              w="80%"
              _hover={{ bg: 'red.400' }}
              fontSize="2xl"
              h="12"
            >
              Avançar
            </Button>
          </Flex>
        </Box>
      )}
      {isNextFormOpen && (
        <Box>
          <Text fontSize="2xl" fontWeight="semi-bold" my="8" textAlign="center">
            Cenário encontrado
          </Text>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <FormControl>
              <FormLabel color="red.600">Quantidade de pessoas</FormLabel>
              <Input
                placeholder="Digite a quantidade de pessoas no local"
                borderColor="gray.900"
                type="number"
                _hover={{ textDecoration: 'none' }}
                {...register('numberOfPeople')}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">
                As pessoas identificadas possuem abrigo ?
              </FormLabel>
              <Select
                {...register('isThereVisibleShelter')}
                borderColor="gray.900"
              >
                <option value="0">Sim</option>
                <option value="1">Não</option>
                <option value="2">Não consegui identificar</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">
                Há alguém do sexo feminino :
              </FormLabel>
              <Select {...register('isThereWomen')} borderColor="gray.900">
                <option value="0">Sim</option>
                <option value="1">Nao</option>
                <option value="2">Nao consegui identificar</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">Existem crinças no local ?</FormLabel>
              <Select {...register('isThereChildren')} borderColor="gray.900">
                <option value="0">Sim</option>
                <option value="1">Nao</option>
                <option value="2">Nao consegui identificar</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">
                Necessitam de proteção térmica ?
              </FormLabel>
              <Select
                {...register('isThereThermalProtectionFromCold')}
                borderColor="gray.900"
              >
                <option value="0">Sim</option>
                <option value="1">Nao</option>
                <option value="2">Nao consegui identificar</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="red.600">Nível de urgência</FormLabel>
              <Input
                placeholder="Digite um número de 0 a 3"
                borderColor="gray.900"
                type="number"
                _hover={{ textDecoration: 'none' }}
                {...register('urgencyLevel')}
              />
            </FormControl>
          </SimpleGrid>
          <FormControl marginTop="5">
            <FormLabel color="red.600">Situação no geral</FormLabel>
            <Textarea
              {...register('medicalCareNeedsDescription')}
              borderColor="gray.900"
              placeholder="Descreva aqui observações relavantes das pessoas que você observou"
              size="sm"
              borderRadius={6}
            />
          </FormControl>

          <Flex my="5" flexDirection={['column', 'column', 'column', 'row']}>
            <Button
              w={['100%', '100%', '100%', '60%']}
              bg="red.600"
              color="white"
              onClick={() => setIsNextFormOpen(false)}
              _hover={{ bg: 'red.400' }}
              fontSize="2xl"
              h="12"
              mr="2"
              mb={['2', '2', '2', '0']}
            >
              Voltar
            </Button>
            <Button
              type="submit"
              w={['100%', '100%', '100%', '60%']}
              bg="red.600"
              color="white"
              _hover={{ bg: 'red.400' }}
              fontSize="2xl"
              h="12"
              isLoading={formState.isSubmitting}
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
