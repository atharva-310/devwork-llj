import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {Navbar} from './components/Navbar'
import Hero from './components/Hero';
import PastPartner from './components/partners/PastPartner';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width={"100vw"} position="fixed" background={"white"}>
      <Navbar />
      </Box>
      <Box textAlign="center" fontSize="xl" bCK paddingTop="12vh">
        <Hero />
        {/* <PastPartner />
        <Grid minH="100vh" backgroundColor={"#d5f3fe"}  >
          
          <ColorModeSwitcher justifySelf="flex-end" />
          
        </Grid> */}
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
