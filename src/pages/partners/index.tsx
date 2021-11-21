import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

import { RiStarFill } from 'react-icons/ri';
import { DrawerIcon } from '../../components/DrawerIcon';
import { Header } from '../../components/Header';

export default function Partners() {
  const ongs = [
    {
      image: '/spinvisivel.png',
      imageAlt: 'São Paulo Invisível',
      title: 'São Paulo Invisível',
      link: 'https://www.spinvisivel.org/inverno',
      reviewCount: 99,
      rating: 5,
    },
    {
      image: '/anjosdanoite.png',
      imageAlt: 'Anjos da Noite',
      title: 'Anjos da Noite',
      link: 'http://www.anjosdanoite.org.br/doacoes.cfm',
      reviewCount: 50,
      rating: 4,
    },
    {
      image: '/doispaes.png',
      imageAlt: 'São Paulo Invisível',
      title: 'Dois Paẽs e um Pingado',
      link: 'https://www.instagram.com/doispaeseumpingado_sp/',
      reviewCount: 33,
      rating: 5,
    },
  ];
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
        flexDirection="column"
        align="center"
      >
        <Text fontSize="2xl" fontWeight="semi-bold">
          Nossos parceiros
        </Text>
        <SimpleGrid marginY="6" columns={[1, 3]}>
          {ongs.map((ong) => (
            <Flex marginTop="5" mr={['0', '10']}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="gray.100"
              >
                <Image
                  src={ong.image}
                  width="100%"
                  height="70%"
                  alt={ong.imageAlt}
                />

                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {ong.title}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    <Link href={ong.link}>Site : {ong.title}</Link>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <Icon
                          as={RiStarFill}
                          color={i < ong.rating ? 'green.500' : 'gray.300'}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {ong.reviewCount} classificações
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
