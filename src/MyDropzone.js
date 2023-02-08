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

  return (
    <>
      <Flex
        border="1px"
        borderStyle="dashed"
        backgroundColor="gray.700"
        h="50%"
        justifyContent="center"
        alignItems="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Drag and drop file</p>
      </Flex>
      <Flex justifyContent="left">
        <ul>{files}</ul>
      </Flex>
    </>
  );
}

export default MyDropzone;
