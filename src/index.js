import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MyDropzone from "./MyDropzone";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <App />
        </Grid>
      </Box>
    </ChakraProvider>
  </StrictMode>
);
