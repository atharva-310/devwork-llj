import React from 'react';
import {
  Box,
  Text,
  Image,
  Flex,
  Heading,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react';

import {
  FaMugHot,
  FaCoffee,
  FaRegLemon,
  FaSeedling,
  FaRegThumbsUp,
} from 'react-icons/fa';
export default function AboutUs() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box maxW="100vw" pt="80px" fontFamily="'Josefin Sans', sans-serif">
      <Flex justifyContent="center" alignItems="center">
        <Flex
          flexWrap="wrap"
          maxW="1400px"
          width={['90vw', '90vw', '90vw', '90vw', '80vw']}
          pt="20px"
          pb="20px"
          alignContent="center"
          justifyContent="center"
        >
          <Box
            width={isDesktop ? '50%' : '90%'}
            height="70%"
            // bg="red"
            p="10px"
            minW="md"
          >
            <HStack pb="5px">
              <FaMugHot color="#d2804b" />
              <Heading
                as="h3"
                size="sm"
                fontWeight="600"
                pt="2px"
                fontFamily="'Josefin Sans', sans-serif"
              >
                About Us
              </Heading>
            </HStack>
            <Heading as="h2" size="xl" mb="20px">
              There Is All About Cafephile
            </Heading>
            <Text
              size="sm"
              fontSize="20px"
              fontStyle="italic"
              lineHeight="30px"
              color="#060606"
            >
              "Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies
              nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis
              eros et, sed commodo risus. Nullam sit amet laoreet elit.
              Suspendisse non init magnaa velit efficitur, dolor eget ex
              fermentum".{' '}
            </Text>
            <Image
              src={
                'https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/images/sign.png'
              }
              mt="40px"
            />
          </Box>
          <Flex
            width={isDesktop ? '50%' : '90%'}
            height="70%"
            wrap="wrap"
            minW="md"
          >
            <Box width="50%" height="50%" p="10px">
              <FaCoffee fontSize="40px" color="#d2804b" />
              <Heading
                fontFamily="'Josefin Sans', sans-serif"
                as="h3"
                fontSize="25px"
                color="#060606"
              >
                Awesome Aroma
              </Heading>
              <Text fontSize="17px" color="#707070">
                Sed ut perspiciatis unde omnis iste natus error sit oluptatem
                accusantium doloremque ladase.
              </Text>
            </Box>
            <Box width="50%" height="50%" p="10px">
              <FaRegLemon fontSize="40px" color="#d2804b" />
              <Heading
                fontFamily="'Josefin Sans', sans-serif"
                as="h3"
                fontSize="25px"
                color="#060606"
              >
                Awesome Aroma
              </Heading>
              <Text fontSize="17px" color="#707070">
                Sed ut perspiciatis unde omnis iste natus error sit oluptatem
                accusantium doloremque ladase.
              </Text>
            </Box>
            <Box width="50%" height="50%" p="10px">
              <FaRegThumbsUp fontSize="40px" color="#d2804b" />
              <Heading
                fontFamily="'Josefin Sans', sans-serif"
                as="h3"
                fontSize="25px"
                color="#060606"
              >
                Awesome Aroma
              </Heading>
              <Text fontSize="17px" color="#707070">
                Sed ut perspiciatis unde omnis iste natus error sit oluptatem
                accusantium doloremque ladase.
              </Text>
            </Box>
            <Box width="50%" height="50%" p="10px">
              <FaSeedling fontSize="40px" color="#d2804b" />
              <Heading
                fontFamily="'Josefin Sans', sans-serif"
                as="h3"
                fontSize="25px"
                color="#060606"
              >
                Awesome Aroma
              </Heading>
              <Text fontSize="17px" color="#707070">
                Sed ut perspiciatis unde omnis iste natus error sit oluptatem
                accusantium doloremque ladase.
              </Text>
            </Box>
          </Flex>
          {/* <Flex></Flex> */}
        </Flex>
      </Flex>
    </Box>
  );
}
