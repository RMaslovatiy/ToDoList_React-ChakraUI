import { Container, Divider, Flex, Button, Spacer, Box, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import ItemContainer from "./itemsContainer/ItemContainer";
import { delList } from "../redux/reducers/lists/asyncThunks"
import { useDisclosure } from "@chakra-ui/react";
import ItemInput from "./ItemInput";
import React, { useState } from "react";
import { postItem, delItem } from "../redux/reducers/lists/asyncThunks";
import TodoStore from '../mobx/store';
import { observer } from 'mobx-react-lite'

const ListEl = observer(() => {

    // const lists = TodoStore.lists; //mobx//

    const dispatch = useDispatch();
    const [idAddButton, setIdAddButton] = useState();
    const [visibleItemInput, setVisibleItemInput] = useState(false);
    const lists = useSelector((state) => state.lists.data); //redux//

    const showItemInput = (e) => {
        setVisibleItemInput((visibleItemInput) => !visibleItemInput);
        setIdAddButton(e.target.id);
    };

    const handleEnterForAddItem = (event, data, resetValue) => {
        if (event.key === "Enter") {
            addItem(data);
            resetValue();
        }
    };

    const addItem = (data) => {
        dispatch(postItem(data));
        setVisibleItemInput(false);
    };

    return (
        lists.map(list => (
            <Container w='350px' key={list.id}>
                <Flex  >
                    <Button
                        mr='6px'
                        variant='ghost'
                        size='s'
                        id={list.id}
                        onClick={(e) => showItemInput(e)}>
                        +</Button>
                    <Spacer />
                    {list.title}
                    <Spacer />
                    <Button
                        mr='6px'
                        variant='ghost'
                        size='s'
                        id={list.id}
                        onClick={() => dispatch(delList(list.id))}
                    >
                        Х</Button>
                </Flex>
                <Divider />
                <ItemInput
                    id={list.id}
                    list={list}
                    onKeyDown={handleEnterForAddItem}
                    visibility={visibleItemInput}
                    idAddButton={idAddButton}
                    addItem={addItem} />
                <ItemContainer list={list} />
            </Container>
        ))
    )
})

export default ListEl