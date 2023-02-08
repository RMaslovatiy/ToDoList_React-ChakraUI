import { useSelector } from "react-redux";
import { Box, Button, Flex } from "@chakra-ui/react";
import ListEl from "./ListEl";
import { Droppable } from "react-beautiful-dnd";
const ListContainer = ({ lists }) => {
  return (
    <Flex flexDirection="column" h="90%" w="100%">
      BUILDER BLOCKS
      {lists.map((list, index) => (
        <ListEl list={list} key={index} />
      ))}
    </Flex>
  );
};

export default ListContainer;
