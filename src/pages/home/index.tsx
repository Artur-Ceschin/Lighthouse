import { Header } from '../../components/Header';
import { Box, Text, Flex, Stack, Checkbox, HStack } from '@chakra-ui/react';

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

      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        mt="4"
        px="6"
        flexDirection="column"
      >
        <Text fontSize="2xl">Casos cadastrados</Text>
        <HStack marginTop="6" spacing="8">
          <Box
            w="auto"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="gray.100"
            h="auto"
            p="8"
          >
            <Stack spacing="1" marginBottom="3">
              <Text>
                Nome : <span>Artur Ceschin</span>
              </Text>
              <Text>
                Email : <span>artur.ceschin@gmail.com</span>
              </Text>
              <Text>
                Telefone : <span>(19)98181-4098</span>
              </Text>
            </Stack>
            <Stack spacing="1" marginBottom="3">
              <Text>
                Bairro : <span>Mocca SP</span>
              </Text>
              <Text>
                Rua : <span>Rua Andrade da Cunha</span>
              </Text>
              <Text>
                Ponto de referência : <span>Perto da padaria pães frescos</span>
              </Text>
            </Stack>
            <Stack spacing="1" marginBottom="3">
              <Text>
                Quantidade de pessoas :{' '}
                <Text display="inline" color="red.500">
                  10
                </Text>
              </Text>
              <Text>
                Crianças no local :{' '}
                <Text display="inline" color="red.500">
                  Sim
                </Text>
              </Text>
              <Text>
                Nível de urgência :{' '}
                <Text display="inline" color="red.500">
                  7
                </Text>
              </Text>
            </Stack>
            <HStack spacing="2">
              <Text>Caso atendido</Text>
              <Checkbox
                size="md"
                colorScheme="green"
                defaultIsChecked
              ></Checkbox>
            </HStack>
          </Box>
          <Box
            w="auto"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="gray.100"
            h="auto"
            p="8"
          >
            <Stack spacing="1" marginBottom="3">
              <Text>
                Nome : <span>Artur Ceschin</span>
              </Text>
              <Text>
                Email : <span>artur.ceschin@gmail.com</span>
              </Text>
              <Text>
                Telefone : <span>(19)98181-4098</span>
              </Text>
            </Stack>
            <Stack spacing="1" marginBottom="3">
              <Text>
                Bairro : <span>Mocca SP</span>
              </Text>
              <Text>
                Rua : <span>Rua Andrade da Cunha</span>
              </Text>
              <Text>
                Ponto de referência : <span>Perto da padaria pães frescos</span>
              </Text>
            </Stack>
            <Stack spacing="1" marginBottom="3">
              <Text>
                Quantidade de pessoas :{' '}
                <Text display="inline" color="red.500">
                  10
                </Text>
              </Text>
              <Text>
                Crianças no local :{' '}
                <Text display="inline" color="red.500">
                  Sim
                </Text>
              </Text>
              <Text>
                Nível de urgência :{' '}
                <Text display="inline" color="red.500">
                  7
                </Text>
              </Text>
            </Stack>
            <HStack spacing="2">
              <Text>Caso atendido</Text>
              <Checkbox
                size="md"
                colorScheme="green"
                defaultIsChecked
              ></Checkbox>
            </HStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
