import { Box, Container } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from "react";
import { getTodoLists } from './redux/reducers/lists/asyncThunks';
import ListContainer from './listContainer/ListContainer';
import AddList from './AddList';
import Preloader from './Preloader';
import Header from './Header';
import TodoStore from './mobx/store';
import { observer } from 'mobx-react-lite'

const BuildToDo = observer(() => {

    const dispatch = useDispatch();
    // TodoStore.getListsRequest();
    useEffect(() => {
        dispatch(getTodoLists());
    }, [dispatch]);

    const isLoading = useSelector(state => state.lists.isLoading);
    return (
        isLoading ?
            <Preloader />
            :
            <Container
                w='550px'
                centerContent='true' >
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Box p='6'>
                        <Header />
                        <ListContainer />
                    </Box>
                </Box>
                <AddList />
            </Container>
    )
})

export default BuildToDo