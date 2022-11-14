import {
  Box,
  Flex,
  Image,
  Text,
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
import React from 'react';

export default function Speakers() {
  const isTab = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      backgroundImage={
        'url(https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/images/bg2.jpg)'
      }
      minH="80vh"
      bgAttachment="fixed"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      bgPos="bottom"
      bgSize="cover"
    >
      <Flex
        width={isTab ? '90%' : '50%'}
        color="white"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <HStack pb="5px" mt="100px">
          <FaMugHot color="white" />
          <Heading
            as="h3"
            size="20px"
            fontWeight="400"
            pt="3px"
            fontFamily="'Josefin Sans', sans-serif"
          >
            Time to discover
          </Heading>
        </HStack>
        <Heading
          fontFamily="'Josefin Sans', sans-serif"
          fontSize={['35px', '45px', '50px']}
        >
          Why We Are Unique?
          <span style={{ display: 'block' }}>Have A Look</span>
        </Heading>
      </Flex>
      <Flex
        color="white"
        position="relative"
        top="150px"
        width={['100%', '100%', '100%', '80%']}
        height="400px"
        pr="40px"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="flex-end"
        alignItems="flex-start"
        alignSelf="flex-end"
      >
        <Box
          height="100%"
          width="30%"
          minW="200px"
          ml="20px"
          padding="20px"
          pb="20px"
          bg="white"
          borderRadius="lg"
          boxShadow={'xl'}
          color="#060606"
          fontFamily="'Josefin Sans', sans-serif"
        >
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mb="10px"
            height="90%"
            width="100%"
            objectFit="cover"
            borderRadius="lg"
          />
          <Text
            align="center"
            m="10px"
            fontWeight="600"
            fontSize="20px"
            lineHeight="30px"
          >
            Happy Customer
          </Text>
        </Box>
        <Box
          height="100%"
          width="30%"
          minW="200px"
          ml="20px"
          padding="20px"
          pb="20px"
          bg="white"
          borderRadius="lg"
          boxShadow={'xl'}
          color="#060606"
          fontFamily="'Josefin Sans', sans-serif"
        >
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mb="10px"
            height="90%"
            width="100%"
            objectFit="cover"
            borderRadius="lg"
          />
          <Text
            align="center"
            m="10px"
            fontWeight="600"
            fontSize="20px"
            lineHeight="30px"
          >
            Happy Customer
          </Text>
        </Box>
        <Box
          height="100%"
          width="30%"
          minW="200px"
          ml="20px"
          padding="20px"
          pb="20px"
          bg="white"
          borderRadius="lg"
          boxShadow={'xl'}
          color="#060606"
          fontFamily="'Josefin Sans', sans-serif"
        >
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mb="10px"
            height="90%"
            width="100%"
            objectFit="cover"
            borderRadius="lg"
          />
          <Text
            align="center"
            m="10px"
            fontWeight="600"
            fontSize="20px"
            lineHeight="30px"
          >
            Happy Customer
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
