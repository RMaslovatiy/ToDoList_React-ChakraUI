import { SkeletonText, Text, Flex, Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsDone } from '../../redux/reducers/list/asyncThunks';
import ItemMenu from "../../ItemMenu";



const ItemContainer = () => {
    const list = useSelector((state) => state.list.data)
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
                {list.items.map(item => (

                    <Flex
                        onDragEnd={() => console.log('droped')}
                        justifyContent='space-between'
                        m='10px'
                        key={item.id}>
                        <Checkbox
                            size='lg'
                            isChecked={item.isDone}
                            onChange={(e) => changeIsDone(item)}
                            as={item.isDone ? 'del' : null}>
                            {item.name}
                        </Checkbox>
                        <ItemMenu />
                    </Flex>
                ))}
            </>
        );
    } else {
        return (
            <>
                <SkeletonText startColor='gray.700'
                    noOfLines={1} skeletonHeight='5' />
                <Text mt='2px' mb='2px' background='gray.700'>No items</Text>
                <SkeletonText startColor='gray.700'
                    noOfLines={1} spacing='4' skeletonHeight='5' />
            </>
        )
    }
};

export default ItemContainer;


