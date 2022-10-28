import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
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
} from '@chakra-ui/react'
  import * as React from 'react'

  import { FiMenu } from 'react-icons/fi'
  import {FaPhoneAlt} from 'react-icons/fa'

  import logo from "../assests/logo.png"



  import SponserModal from "./SponserModal"
  
  import { AiFillHeart } from "react-icons/ai";
  export const Navbar = () => {

    const isDesktop = useBreakpointValue({ base: false, lg: true })
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()



    return (
      <Box as="section" bg={"white 50%"}>
        <Box as="nav" bg="bg-surface" >
        <Container py={{ base: '4', lg: '5' }} mx="10vw" >
        <HStack spacing="0" justify="space-between" width={"80vw"}>
              <Image src={logo} height="3rem" />
              <Spacer />
              {isDesktop ? (
                <Flex justify="flex-end" flex="1">
                  <ButtonGroup variant="link" spacing="8" marginEnd="45px">
                    {['Team', 'About', "Past Sponsers"].map((item) => (
                      <Button color={"black"} fontSize="1.2rem" key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    {/* <Button variant="ghost">Past Sponser</Button> */}
                    <SponserModal />
                    
                    <Button leftIcon={<FaPhoneAlt />} colorScheme='green' variant='solid'>
                     Contact Us
                    </Button>
                    
                  </HStack>
                </Flex>
              ) : (
                <>
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                  ref={btnRef}
                  onClick={onOpen}
                />
                <Drawer
                  isOpen={isOpen}
                  placement='right'
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
                      <VStack width={"100%"} alignItems={"flex-start"}>
                      
                        {['Team', 'About', "Past Sponsers"].map((item) => (
                          <Button width={"100%"} varient="link" color={"black"} fontSize="1.2rem" key={item}>{item}</Button>
                        ))}
                      
                      </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                      <VStack width={"100%"} >
                        <SponserModal width={"100%"} />
                        <Button leftIcon={<FaPhoneAlt />} width="100%" colorScheme='green' variant='solid'>
                        Contact Us
                        </Button>
                      </VStack>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                </>
              )}
            </HStack>
           
        </Container>
        {/* Upcoming events  */}
        {/* <HStack spacing="0" height={"40px"} justify="space-between" width={"100%"} background="black">
          <Heading color={"white"} > Upcoming</Heading>
        </HStack> */}
        </Box>
      </Box>
    )
  }