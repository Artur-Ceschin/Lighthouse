import { Box, Flex, Text, Badge, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { RiStarFill } from 'react-icons/ri';
import { Header } from '../../components/Header';

export default function Partners() {
  const ongs = [
    {
      image: '/spinvisivel.png',
      imageAlt: 'São Paulo Invisível',
      title: 'Ong',
      reviewCount: 99,
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
      <Header />

      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        mt="4"
        px="6"
        flexDirection="column"
      >
        <Text fontSize="2xl">Nossos parceiros</Text>
        {ongs.map((ong) => (
          <Flex marginTop="5">
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
                height="100%"
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

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Icon
                        as={RiStarFill}
                        color={i < ong.rating ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {ong.reviewCount} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
