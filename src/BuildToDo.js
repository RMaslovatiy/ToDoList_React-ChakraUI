import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  VStack,
  Center,
  Input,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import React from "react";

import ListContainer from "./listContainer/ListContainer";

import Preloader from "./Preloader";

import { observer } from "mobx-react-lite";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import MyDropzone from "./MyDropzone";

const onDragEnd = (result, columns, setColumns) => {};

const BuildToDo = observer(() => {
  const dispatch = useDispatch();
  // const list = useSelector((state) => state.list.data)
  // useEffect(() => {
  //     dispatch(getTodoLists());
  // }, [dispatch]);

  // const isLoading = useSelector(state => state.lists.isLoading);
  const isLoading = false;
  const onDragEnd = (result) => {};
  const state = useSelector((state) => state.lists);
  return isLoading ? (
    <Preloader />
  ) : (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container
        flexDirection="row"
        alignItems="strech"
        w="700px"
        h="800px"
        border="1px"
        borderColor="gray.400"
        borderRadius="4%"
        centerContent="true"
      >
        <VStack flexDirection="column" w="40%">
          <ListContainer lists={state.data} />

          <Divider />
        </VStack>
        <Center h="93%">
          <Divider orientation="vertical" mt={7} mr={3} ml={3} />
        </Center>
        <VStack id="items" flexDirection="column" flexWrap="nowrap" w="60%">
          <Flex flexDirection="column" h="90%" w="100%">
            Report constructor
          </Flex>
          <Divider />
          <Container dir="col" w="100%" h="25%">
            <MyDropzone />
          </Container>
        </VStack>
      </Container>
    </DragDropContext>
  );
});

export default BuildToDo;
