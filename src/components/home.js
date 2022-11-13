import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box height="100vh" maxW="100vw" fontFamily="'Josefin Sans', sans-serif">
      <Flex
        zIndex="80"
        width="100%"
        maxW="100vw"
        height="100%"
        maxH="100vh"
        bg="rgba(0, 0, 0, 0.3)"
        position="absolute"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          // bg="green"
          width="80%"
          height="60%"
          color="white"
          fontFamily="'Josefin Sans', sans-serif"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          letterSpacing="2px"
        >
          <Heading fontSize={['45px', '55px', '60px']}>
            Life Begins
            <span style={{ display: 'block', 'padding-left': '80px' }}>
              After Coffee
            </span>
          </Heading>
          <Text mt="10px" fontSize={['16px', '16px', '18px']} maxW="500px">
            Irferendis repudandae fugia rchitecto beatae rederit svitae recusa
            ndae debitifacere.
          </Text>
          <Button
            variant="outlined"
            border="1px"
            borderRadius="30px"
            colorScheme="white"
            fontSize="16px"
            margin="10px"
            ml="40px"
          >
            Read More
          </Button>
        </Flex>
      </Flex>
      <video autoPlay muted loop id="myVideo">
        <source
          src="https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/videos/video.mp4"
          type="video/mp4"
        ></source>
      </video>
    </Box>
  );
}
