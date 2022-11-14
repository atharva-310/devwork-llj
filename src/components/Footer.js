import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useBreakpointValue,
  InputGroup,
  InputRightAddon,
  Input,
  Divider,
} from '@chakra-ui/react';
import {
  FaMugHot,
  FaCoffee,
  FaRegLemon,
  FaSeedling,
  FaRegThumbsUp,
} from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';
export default function Footer() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      backgroundImage={
        'https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/images/footer.jpg'
      }
      backgroundRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Flex
        minH="50vh"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor="#0e0a09cf"
        color="white"
        pt="70px"
      >
        <Heading
          align="center"
          fontFamily="'Josefin Sans', sans-serif"
          fontSize={['15px', '25px', '30px']}
        >
          Coffee Build Your Fresh Mind
        </Heading>
        <InputGroup
          size="lg"
          width="80%"
          borderColor="#ffffff63"
          maxW="550px"
          m="20px"
        >
          <Input
            placeholder="Email Address "
            varient="outline"
            borderRadius="35px"
          />
          <InputRightAddon
            width="30%"
            bg="#fec744"
            children={'Subscribe'}
            borderRadius="35px"
          />
        </InputGroup>
        <Divider width={isDesktop ? '70%' : '90%'} />
        <Text width="90%" align="center">
          © 2022 Cafephile All Rights Reserved
        </Text>
      </Flex>
    </Box>
  );
}
