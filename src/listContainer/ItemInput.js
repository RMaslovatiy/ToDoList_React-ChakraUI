import React, { useState } from 'react'
import { useDisclosure } from "@chakra-ui/react";

import { Button, Stack, Input } from "@chakra-ui/react";



const ItemInput = ({ id, onKeyDown, visibility, idAddButton, addItem }) => {

    const [value, setValue] = useState('');
    const data = {
        name: { name: value },
        id,
    };
    const confirmClick = () => {
        addItem(data)
        resetValue()
    };
    function resetValue() {
        setValue('')
    }
    if (visibility && id == idAddButton) {
        return (
            <Stack direction={['row']} spacing='5px' mt='2px'>
                <Input
                    display='flex'
                    w='280px'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => onKeyDown(e, data, resetValue)}
                />
                <Button
                    variant='solid'
                    onClick={confirmClick}
                >
                    OK
                </Button>
            </Stack>
        )
    }
}

export default ItemInput