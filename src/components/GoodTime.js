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

import { FaMugHot } from 'react-icons/fa';
export default function GoodTime() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const isTab = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });
  return (
    <Box
      mt="150px"
      maxW="100vw"
      overflowX="hidden"
      pt="80px"
      fontFamily="'Josefin Sans', sans-serif"
    >
      <Flex justifyContent="center" alignItems="center">
        <Flex
          flexWrap="wrap"
          // maxW="1400px"

          maxWidth="90vw"
          width={['90vw', '90vw', '90vw', '90vw', '80vw']}
          pt="20px"
          p="20px"
          flexDirection="row-reverse"
          // alignItems="flex-end"
          justifyContent="center"
        >
          <Box
            width={isDesktop ? '50%' : '90%'}
            height="70%"
            // bg="red"
            p="30px"
            // pl="60px"
            pt="0px"
            // minW="md"
          >
            <HStack pb="5px">
              <FaMugHot color="#d2804b" />
              <Heading
                as="h2"
                size="60px"
                fontWeight="600"
                pt="2px"
                fontFamily="'Josefin Sans', sans-serif"
              >
                Good Time
              </Heading>
            </HStack>
            <Heading as="h2" size="xl" mb="20px">
              Coffee Make Us Fresh & Active
            </Heading>
            <Heading
              size="lg"
              fontSize="24px"
              mb="20px"
              color="#060606"
              fontWeight="400"
            >
              Coffee Make Us Fresh & Active
            </Heading>
            <Text
              size="sm"
              fontSize="20px"
              fontStyle="italic"
              lineHeight="30px"
              color="#707070"
            >
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Non quae, fugiat consequatur
              oluptatem ad.
            </Text>
            {/* <Image
              src={
                'https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/images/sign.png'
              }
              mt="40px"
            /> */}
          </Box>
          <Flex
            width={isDesktop ? '50%' : '90%'}
            height="70%"
            maxh="500px"
            wrap="wrap"
            justifyContent="flex-end"
            // bg="green"
          >
            <Image
              borderRadius="2xl"
              src="https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/images/ab1.jpg"
            />
            <Box
              position="relative"
              top="-210px"
              // left="420px"
              bg="#000000a6"
              borderRadius="45px"
              width="210px"
              height="210px"
              transform={'rotate(45deg)'}
              color="white"
            >
              <Box
                transform={'rotate(-45deg)'}
                align="center"
                mr="12px"
                mt="30px"
              >
                <Heading
                  fontFamily="'Josefin Sans', sans-serif"
                  fontSize="40px"
                >
                  25+
                </Heading>
                <Heading
                  mt="10px"
                  fontFamily="'Josefin Sans', sans-serif"
                  fontSize="28px"
                >
                  Years of Experience
                </Heading>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
