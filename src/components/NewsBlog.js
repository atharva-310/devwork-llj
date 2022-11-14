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
  Divider,
} from '@chakra-ui/react';
import {
  FaMugHot,
  FaRegUser,
  FaRegCalendar,
  FaSeedling,
  FaRegThumbsUp,
} from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';
export default function NewsBlog() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      minH="75vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      color="black"
      bg="#fbfbfb"
    >
      <HStack pb="5px">
        <FaMugHot color="#d2804b" />
        <Heading
          as="h3"
          size="lg"
          fontWeight="400"
          fontSize="20px"
          pt="3px"
          fontFamily="'Josefin Sans', sans-serif"
        >
          News and Blog
        </Heading>
      </HStack>
      <Heading
        align="center"
        fontFamily="'Josefin Sans', sans-serif"
        fontSize={['25px', '35px', '40px']}
      >
        News and Blog
      </Heading>
      <Flex justifyContent="center" alignItems="center">
        <Flex
          flexWrap="wrap"
          maxWidth="90vw"
          width={['90vw', '90vw', '90vw', '90vw', '80vw']}
          pt="20px"
          p="20px"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <Box
            width={isDesktop ? '45%' : '90%'}
            mx="10px"
            mt="10px"
            minH="150px"
            px="10px"
            boxShadow="2xl"
            borderRadius="lg"
          >
            <Heading p="40px" pb="20px" fontSize="25px">
              Hello World !
            </Heading>
            <Box bg="#707070" height="0.5px" width="90%" margin="auto"></Box>
            <HStack justify="space-between" mx="20px" mt="10px">
              <HStack>
                <FaRegUser color="#d2804b" />
                <Text>Layouts</Text>
              </HStack>
              <HStack>
                <FaRegCalendar color="#d2804b" />
                <Text>August 16, 2022</Text>
              </HStack>
            </HStack>
          </Box>
          <Box
            width={isDesktop ? '45%' : '90%'}
            mx="10px"
            mt="10px"
            minH="150px"
            px="10px"
            boxShadow="2xl"
            borderRadius="lg"
          >
            <Heading p="40px" pb="20px" fontSize="25px">
              History of Coffee
            </Heading>
            <Box bg="#707070" height="0.5px" width="90%" margin="auto"></Box>
            <HStack justify="space-between" mx="20px" mt="10px">
              <HStack>
                <FaRegUser color="#d2804b" />
                <Text>Layouts</Text>
              </HStack>
              <HStack>
                <FaRegCalendar color="#d2804b" />
                <Text>August 16, 2022</Text>
              </HStack>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
