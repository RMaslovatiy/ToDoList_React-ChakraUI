import {
  Container,
  Divider,
  IconButton,
  Spacer,
  ButtonGroup,
  Flex,
  Button,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ListEl = ({ list }) => {
  // const lists = TodoStore.lists; //mobx//

  const dispatch = useDispatch();

  return (
    <DragDropContext>
      <Droppable droppableId="characters">
        {(provided) => <ul className="characters">list.title</ul>}
      </Droppable>
    </DragDropContext>
  );
};

export default ListEl;
