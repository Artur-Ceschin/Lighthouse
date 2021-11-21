import {
  Flex,
  Text,
  HStack,
  Box,
  Avatar,
  useBreakpointValue,
  IconButton,
  Icon,
  Stack,
} from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiUserAddLine,
  RiDashboardLine,
  RiListUnordered,
  RiServiceLine,
  RiMenuLine,
} from 'react-icons/ri';
import Image from 'next/image';
import { useHeaderDrawer } from '../../context/HeaderContextDrawer';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

export function HeaderNav() {
  const { onOpen, isOpen } = useHeaderDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
      flexDirection={['column', 'row']}
      justify="space-between"
    >
      <Image
        src="/lighthouse.png"
        height="80px"
        width="80px"
        alt="Logo lighthouse(Farol)"
      />
      <Stack ml={[0, '20']}>
        <Flex
          mx="auto"
          align={['left', 'center']}
          flexDirection={['column', 'row']}
        >
          <Flex align="center" margin="4">
            <Icon color="red.600" as={RiDashboardLine} mr="1" fontSize="md" />
            <ActiveLink href="/home">
              <Text
                fontSize="xl"
                cursor="pointer"
                _hover={{ color: 'red.500' }}
              >
                Home
              </Text>
            </ActiveLink>
          </Flex>
          <Flex align="center" margin="4">
            <Icon color="red.600" as={RiListUnordered} mr="1" fontSize="md" />
            <ActiveLink href="/">
              <Text
                fontSize="xl"
                cursor="pointer"
                _hover={{ color: 'red.500' }}
              >
                Cadastrar vulnerabilidade
              </Text>
            </ActiveLink>
          </Flex>
          <Flex align="center" margin="4">
            <Icon color="red.600" as={RiServiceLine} mr="1" fontSize="md" />
            <ActiveLink href="/partners">
              <Text
                fontSize="xl"
                cursor="pointer"
                _hover={{ color: 'red.500' }}
              >
                Cadastrar vulnerabilidade
              </Text>
            </ActiveLink>
          </Flex>
        </Flex>
      </Stack>
      <Flex align="center" ml="auto" mt={['350px', '0']}>
        <HStack
          spacing={['6', '8']}
          mx={['6', '8']}
          pr={['6', '8']}
          py="1"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20px" />
          <Icon as={RiUserAddLine} fontSize="20px" />
        </HStack>

        <Flex>
          {isWideVersion && (
            <Box mr="4" textAlign="right">
              <Text>Artur Ceschin</Text>
              <Text color="gray.800" fontSize="small">
                artur.ceschin@gmail.com
              </Text>
            </Box>
          )}
          <Avatar
            size="md"
            name="Artur Ceschin"
            src="https://github.com/Artur-Ceschin.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
