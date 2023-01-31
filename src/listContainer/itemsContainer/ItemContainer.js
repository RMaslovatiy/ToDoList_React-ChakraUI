import { Box, Flex, Checkbox } from "@chakra-ui/react";
import { useDispatch } from 'react-redux'
import { toggleIsDone } from '../../redux/reducers/lists/asyncThunks';


const ItemContainer = ({ list }) => {
    const dispatch = useDispatch();
    const changeIsDone = (item) => {
        const data = {
            list,
            item
        }
        dispatch(toggleIsDone(data))
    }
    if (list.items && list.items.length > 0) {
        return (
            <>
                <Box
                    display='flex'
                    key={list.id}
                    color='gray.600'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='s'
                    ml='2'
                >
                    Items:
                </Box>
                {list.items.map(item => (
                    <Flex
                        color='gray.400'
                        ml='30px'
                        key={item.id}>
                        <Checkbox
                            isChecked={item.isDone}
                            as={item.isDone ? 'del' : null}
                            onChange={(e) => changeIsDone(item)}>
                            {item.name}
                        </Checkbox>
                    </Flex>
                ))}
            </>
        );
    }
};

export default ItemContainer;


