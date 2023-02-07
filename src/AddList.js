import { Button, Flex } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postList } from "./redux/reducers/lists/asyncThunks";

const AddList = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    function handleEnter(event) {
        if (event.key === 'Enter') addTask()
    };
    const addTask = () => {
        dispatch(postList(value));
        setValue('');
    };

    return (
        <Flex
            w='100%'
            h='10%'>
            <Button
                w='100%'
                leftIcon={<AddIcon />}
                background='gray.700'
            >
                Add new list
            </Button>
        </Flex>
    )

}

export default AddList