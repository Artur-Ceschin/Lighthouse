import { Header } from '../../components/Header';
import {
  Box,
  Text,
  Flex,
  Stack,
  Checkbox,
  HStack,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { DrawerIcon } from '../../components/DrawerIcon';

export default function Home() {
  const [occurrences, setOccurrences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      api.get('').then((response) => setOccurrences(response.data));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

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

      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        mt="4"
        px="6"
        align="center"
        flexDirection="column"
      >
        <Text fontSize="2xl" fontWeight="semi-bold">
          Casos cadastrados
        </Text>
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
          />
        )}
        <SimpleGrid marginY="6" spacing="8" columns={[1, 3]}>
          {occurrences.map((occurrence, index) => (
            <Box
              w="auto"
              minWidth={100}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="gray.100"
              h="auto"
              p="8"
              key={index}
            >
              <Stack spacing="1" marginBottom="3">
                <Text>
                  Nome : <span>{occurrence.userReporter.name}</span>
                </Text>
                <Text>
                  Email : <span>{occurrence.userReporter.email}</span>
                </Text>
                <Text>
                  Telefone : <span>{occurrence.userReporter.phoneNumber}</span>
                </Text>
              </Stack>
              <Stack spacing="1" marginBottom="3">
                <Text>
                  Cidade : <span>{occurrence.location.city}</span>
                </Text>
                <Text>
                  Bairro : <span>{occurrence.location.address}</span>
                </Text>
                <Text>
                  Rua :{' '}
                  <span>{occurrence.location.addressAproximateNumber}</span>
                </Text>
                <Text>
                  Ponto de referência :{' '}
                  <span>{occurrence.location.referencePoints}</span>
                </Text>
              </Stack>
              <Stack spacing="1" marginBottom="3">
                <Text>
                  Quantidade de pessoas :{' '}
                  <Text display="inline" color="red.500">
                    {occurrence.numberOfPeople}
                  </Text>
                </Text>
                <Text>
                  Crianças no local :{' '}
                  <Text display="inline" color="red.500">
                    {occurrence.isThereChildren === 0 ? 'Não' : 'Sim'}
                  </Text>
                </Text>
                <Text>
                  Nível de urgência :{' '}
                  <Text display="inline" color="red.500">
                    {occurrence.urgencyLevel}
                  </Text>
                </Text>
              </Stack>
              <HStack spacing="2">
                <Text>Caso atendido</Text>
                <Checkbox
                  size="md"
                  colorScheme="green"
                  isChecked={occurrence.isThereNeedForMedicalCare}
                ></Checkbox>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
