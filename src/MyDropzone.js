import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    noClick: true,
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {(file.size / 1024).toFixed(1)} Kb
    </li>
  ));

  function readAsText() {
    let file = acceptedFiles[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      console.log(reader.result);
    };
  }

  return (
    <>
      <Flex
        border="1px"
        borderStyle="dashed"
        backgroundColor="gray.700"
        h="200px"
        w="400px"
        justifyContent="center"
        alignItems="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Drag and drop file here</p>

        <Flex justifyContent="left">
          <ul>{files}</ul>
        </Flex>
      </Flex>
      <Button mt="8px" w="400px" onClick={() => readAsText()}>
        Read file
      </Button>
    </>
  );
}

export default MyDropzone;
