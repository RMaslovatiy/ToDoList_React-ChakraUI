import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import BuildToDo from './BuildToDo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        <Grid p={3} >
          <ColorModeSwitcher justifySelf="flex-end" />
          <BuildToDo />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
