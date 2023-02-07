import { Container, Divider, IconButton, Spacer, ButtonGroup, Flex, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { setList } from "../redux/reducers/list/listReducer";


const ListEl = ({ list }) => {

    // const lists = TodoStore.lists; //mobx//

    const dispatch = useDispatch();
    const [visibleButtons, setVisibleButtons] = useState(false);
    return (

        <Container
            w='100%'>
            <Flex
                justifyContent='space-between'
                alignItems='center'
                w='100%'
                cursor='pointer'
                m='5px'
            >
                <Button
                    onMouseEnter={() => setVisibleButtons(true)}
                    onMouseLeave={() => setVisibleButtons(false)}
                    draggable="true"
                    onDragStart={() => dispatch(setList(list))}
                    background='none'
                    w='90%'>
                    {list.title}
                </Button>
                <Spacer />
                {visibleButtons ?
                    <ButtonGroup
                        id={list.id}
                        size='xs'>
                        <IconButton icon={<EditIcon />} />
                        <IconButton icon={<DeleteIcon />} />
                    </ButtonGroup>
                    : <></>
                }
            </Flex>
            <Divider w='110%' />
        </Container>

    )
}

export default ListEl


