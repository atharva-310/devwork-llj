import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Heading,
    VStack,
    HStack,
    Box,
    Center,

} from '@chakra-ui/react'
import {
    FaPhoneAlt,
    FaFileDownload,
} from 'react-icons/fa'


export default function SponserModal({width}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button width={width} leftIcon={<AiFillHeart />} onClick={onOpen} colorScheme='red' variant='solid' >
        Sponser Us 
    </Button>
    <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading >Sponser Us  </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack width={"100%"} >
            <HStack width="100%" spacing='24px'>
                <Button leftIcon={<FaPhoneAlt />} borderRadius={"5px"} w='30%' height={"80px"} colorScheme="green">
                    Call Us
                </Button>
                <Button leftIcon={<FaPhoneAlt />} borderRadius={"5px"} w='30%' height={"80px"} colorScheme="red">
                    Mail us
                </Button>
                
            </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button leftIcon={ <FaFileDownload /> } colorScheme='yellow' mr={3} onClick={onClose}>
              Sponser Brochure
            </Button>
            <Button  colorScheme={'green'}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    
  )
}
