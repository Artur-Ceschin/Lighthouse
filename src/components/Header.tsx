import { Flex, Text, Icon, HStack, Box, Avatar, Link } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiUserAddLine,
  RiDashboardLine,
  RiListUnordered,
  RiServiceLine,
} from 'react-icons/ri';
import Image from 'next/image';

export function Header() {
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
    >
      <Image
        src="/lighthouse.png"
        height="80px"
        width="80px"
        alt="Logo lighthouse(Farol)"
      />
      <Flex mx="auto" align="center">
        <HStack spacing="6">
          <Flex align="center">
            <Icon color="red.600" as={RiDashboardLine} mr="1" fontSize="md" />
            <Link href="/home" fontSize="2xl">
              Home
            </Link>
          </Flex>
          <Flex align="center">
            <Icon color="red.600" as={RiListUnordered} mr="1" fontSize="md" />
            <Link href="/" fontSize="2xl">
              Cadastrar vulnerabilidade
            </Link>
          </Flex>
          <Flex align="center">
            <Icon color="red.600" as={RiServiceLine} mr="1" fontSize="md" />
            <Link href="/partners" fontSize="2xl">
              Parceiros
            </Link>
          </Flex>
        </HStack>
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="6"
          mx="8"
          pr="8"
          py="1"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20px" />
          <Icon as={RiUserAddLine} fontSize="20px" />
        </HStack>

        <Flex>
          <Box mr="4" textAlign="right">
            <Text>Artur Ceschin</Text>
            <Text color="gray.800" fontSize="small">
              artur.ceschin@gmail.com
            </Text>
          </Box>
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
