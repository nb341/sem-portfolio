import React from 'react';
import {
  Center,
  Box,
  Flex,

} from '@chakra-ui/react';
import {
  ChakraProvider,
  defaultConfig,
  defineConfig
  ,createSystem,
  
} from '@chakra-ui/react';
import PersonalDetails from './components/PersonalDetails';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Projects from './components/Projects';


const customConfig = defineConfig({
  globalCss: {
    body:{
      bg: '#160f30'
    },
    fonts: {
      body: 'Montserrat, sans-serif;'
    }
  },
})

export const system = createSystem(defaultConfig, customConfig)

function App() {
  return (
<ChakraProvider value={system}>
      <Center scrollBehavior="smooth">
        <Box m={8}>
        <Flex direction={{lg:'row', base: 'column'}}>
          <Flex flexDirection={'column'} mr={{lg: '32px'}}>
            <Box>
              <PersonalDetails/>
            </Box>
            <Box mt={'32px'}>
               <Experience/>
            </Box>
            <Box mt={'32px'}>
              <Certificates/>
            </Box>
          </Flex>

        
        
          <Box mt={{base: '32px', lg: '0px'}}>
              <Flex direction={'column'}>
                  <Box>
                     <Skills/> 
                  </Box>
                  <Box marginTop={'32px'}>
                    <Projects/> 
                  </Box>
              </Flex>
          </Box>
        </Flex>
        
        </Box>
      </Center>
    
    </ChakraProvider>
  );
}

export default App;