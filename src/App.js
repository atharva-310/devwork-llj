import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Heading,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Center,
  Button,
} from '@chakra-ui/react';
import './styles.css';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/home';
import { Navbar } from './components/Navbar';
// import Hero from './components/Hero';
// import PastPartner from './components/partners/PastPartner';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Box width={'100vw'} position="fixed" zIndex="99">
          <Navbar />
        </Box>
        <Home />
        <AboutUs />
        <Box height="100vh"> </Box>
        <Box height="300px"> dfksafkas;lk</Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
