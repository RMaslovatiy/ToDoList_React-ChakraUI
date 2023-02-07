import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { EditIcon, ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'
import { BsThreeDotsVertical } from "react-icons/bs";


export default function ItemMenu() {
    return (
        <Menu >
            <MenuButton
                background='none'
                size='xs'
                as={IconButton}
                icon={<BsThreeDotsVertical />}
            />
            <MenuList
                fontSize='xs'
            >
                <MenuItem icon={<EditIcon />}>
                    Edit
                </MenuItem>
                <MenuItem icon={<ArrowForwardIcon />}>
                    Move to another list
                </MenuItem>
                <MenuItem icon={<DeleteIcon />}>
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
