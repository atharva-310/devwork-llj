import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useBreakpointValue,
  HStack,
  VStack,
} from '@chakra-ui/react';
import {
  FaMugHot,
  FaCoffee,
  FaRegLemon,
  FaSeedling,
  FaRegThumbsUp,
} from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';
export default function Testimonials() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      mt="-100px"
      minH="85vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      backgroundImage={
        'https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/images/bg1.jpg'
      }
      backgroundRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <HStack pb="5px">
        <FaMugHot color="white" />
        <Heading
          as="h3"
          size="lg"
          fontWeight="400"
          fontSize="20px"
          pt="3px"
          fontFamily="'Josefin Sans', sans-serif"
        >
          Client Testimonials
        </Heading>
      </HStack>
      <Heading
        align="center"
        fontFamily="'Josefin Sans', sans-serif"
        fontSize={['25px', '35px', '40px']}
      >
        What Client Says About
        <span style={{ display: 'block' }}>Our Cafephile</span>
      </Heading>
      <Flex justifyContent="center" alignItems="center">
        <Flex
          flexWrap="wrap"
          maxWidth="90vw"
          width={['90vw', '90vw', '90vw', '90vw', '80vw']}
          pt="20px"
          p="20px"
          flexDirection="row-reverse"
          justifyContent="space-evenly"
        >
          <Flex width={isDesktop ? '65%' : '90%'} height="70%" p="30px">
            <Text fontSize="22px" lineHeight="34px" color="white" align="left">
              <ImQuotesLeft fontSize="50px" mr="30px" color="#fec744" />
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Non quae, fugiat consequatur
              oluptatem ad.Lorem ipsum viverra feugiat. Pellen tesque libero ut
              justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Non quae, fugiat
              consequatur oluptatem ad.
            </Text>
          </Flex>
          <Flex
            width={isDesktop ? '35%' : '90%'}
            height="70%"
            maxh="500px"
            wrap="wrap"
            justifyContent="space-evenly"
            alignContent="center"
          >
            <Flex flexDirection="column" height="100%" mt="50px">
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading align="center" as="h3" size="50px" fontWeight="500">
                Atharva Pakade
              </Heading>
              <Text
                align="center"
                fontFamily="'Josefin Sans', sans-serif"
                letterSpacing="1px"
              >
                Customer
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
