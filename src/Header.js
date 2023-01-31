import { Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
// const length = TodoStore.lists.length //mobx
const Header = () => {
    const length = useSelector(state => state.lists.data.length);
    return (
        <Text>
            You have {length} tasks:
        </Text>
    )
}
export default Header;

