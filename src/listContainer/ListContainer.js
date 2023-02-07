import { useSelector } from "react-redux";
import { Box, Button, Flex } from "@chakra-ui/react";
import ListEl from "./ListEl";



const ListContainer = ({ lists }) => {
    return (
        <Flex
            flexDirection='column'
            h='90%'
            w='100%'
        >
            Task lists
            {lists.map(list => (
                <ListEl key={list.id} list={list} />
            ))}

        </Flex>
    )
}

export default ListContainer