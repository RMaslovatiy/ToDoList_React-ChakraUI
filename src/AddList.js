import { Input, Button, Stack } from '@chakra-ui/react'
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
        <Stack direction={['row']} spacing='5px' mt='2px'>
            <Input w='325px'
                onKeyDown={handleEnter}
                placeholder="Введіть задачу"
                value={value}
                onChange={(e) => setValue(e.target.value)} />

            <Button
                variant='solid'
                onClick={addTask}
            >
                OK
            </Button>
        </Stack>
    )

}

export default AddList