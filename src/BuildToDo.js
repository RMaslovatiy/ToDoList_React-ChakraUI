import { Box, Button, Container, Divider, Flex, VStack, Center, Input } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { getTodoLists } from './redux/reducers/lists/asyncThunks';
import ListContainer from './listContainer/ListContainer';
import AddList from './AddList';
import Preloader from './Preloader';
import Header from './Header';
import TodoStore from './mobx/store';
import { observer } from 'mobx-react-lite'
import ItemContainer from './listContainer/itemsContainer/ItemContainer';

const BuildToDo = observer(() => {

    const dispatch = useDispatch();
    // TodoStore.getListsRequest();
    useEffect(() => {
        dispatch(getTodoLists());
    }, [dispatch]);
    const lists = useSelector((state) => state.lists.data); //redux//
    const isLoading = useSelector(state => state.lists.isLoading);
    const list = useSelector((state) => state.list.data)
    return (
        isLoading ?
            <Preloader />
            :
            <Container
                flexDirection='row'
                alignItems='strech'
                w='700px'
                h='500px'
                border='1px'
                borderColor='gray.400'
                borderRadius='4%'
                centerContent='true'
            >
                <VStack
                    flexDirection='column'
                    w='40%'
                >
                    <ListContainer
                        lists={lists} />

                    <Divider />
                    <AddList />
                </VStack>
                <Center h='93%'>
                    <Divider orientation='vertical' mt={7} mr={3} ml={3} />
                </Center>
                <VStack
                    id='items'
                    flexDirection='column'
                    flexWrap='nowrap'
                    w='60%'>
                    <Flex
                        flexDirection='column'
                        h='90%'
                        w='100%'
                    >
                        Items of {list.title ? list.title : 'list'}
                        <ItemContainer />
                    </Flex>
                    <Divider />
                    <Flex
                        w='100%'
                        h='10%'>
                        <Button
                            w='100%'
                            leftIcon={<AddIcon />}
                            background='gray.700'
                        >
                            Add item
                        </Button>
                    </Flex>
                </VStack>
            </Container>

    )
})

export default BuildToDo