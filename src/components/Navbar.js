import {
  Box,
  Button,
  ButtonGroup,
  InputGroup,
  InputRightElement,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import * as React from 'react';

import { FiMenu } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import logo from '../assests/logo.png';

import SponserModal from './SponserModal';

import { AiFillHeart } from 'react-icons/ai';
export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box as="section">
      <Box as="nav" bg="bg-surface">
        <Box py={{ base: '4', lg: '5' }} mx="10vw">
          <HStack spacing="0" justify="space-between" width={'80vw'}>
            {/* <Image src={logo} height="3rem" /> */}
            <HStack>
              <Image
                src={
                  'https://wp.w3layouts.com/cafephile/wp-content/themes/cafephile/assets/images/logo.png'
                }
              />
              <Text
                fontFamily="'Josefin Sans', sans-serif"
                fontSize="28px"
                fontWeight="600"
                color="white"
              >
                Cafephile
              </Text>
            </HStack>

            <Spacer />
            {isDesktop ? (
              <Flex justify="flex-end" flex="1">
                <ButtonGroup variant="link" spacing="8" marginEnd="20px">
                  {['Home', 'Team', 'About', 'Past Sponsers'].map(item => (
                    <Button
                      color={'white'}
                      fontFamily="'Josefin Sans', sans-serif"
                      fontSize="18px"
                      key={item}
                      _hover={{ color: '#ffc845' }}
                    >
                      {item}
                    </Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <InputGroup minW="200px">
                    <Input
                      borderRadius="30px"
                      pb="4px"
                      placeholder="Enter Keyword"
                      _placeholder={{
                        color: 'white',
                      }}
                    />
                    <InputRightElement
                      children={<SearchIcon color="#ffc845" />}
                    />
                  </InputGroup>
                </HStack>
              </Flex>
            ) : (
              <>
                <IconButton
                  variant="solid"
                  bg="#ffc845"
                  color="white"
                  icon={<FiMenu fontSize="2rem" />}
                  aria-label="Open Menu"
                  ref={btnRef}
                  onClick={onOpen}
                />
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                      <Image src={logo} height="3rem" />
                    </DrawerHeader>

                    <DrawerBody>
                      <VStack width={'100%'} alignItems={'flex-start'}>
                        {['Team', 'About', 'Past Sponsers'].map(item => (
                          <Button
                            width={'100%'}
                            varient="link"
                            color={'black'}
                            fontSize="1.2rem"
                            key={item}
                          >
                            {item}
                          </Button>
                        ))}
                      </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                      <VStack width={'100%'}>
                        <SponserModal width={'100%'} />
                        <Button
                          leftIcon={<FaPhoneAlt />}
                          width="100%"
                          colorScheme="green"
                          variant="solid"
                        >
                          Contact Us
                        </Button>
                      </VStack>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </HStack>
        </Box>
        {/* Upcoming events  */}
        {/* <HStack spacing="0" height={"40px"} justify="space-between" width={"100%"} background="black">
          <Heading color={"white"} > Upcoming</Heading>
        </HStack> */}
      </Box>
    </Box>
  );
};
