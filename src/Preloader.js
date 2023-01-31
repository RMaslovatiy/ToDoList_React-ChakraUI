import { Container, CircularProgress, } from '@chakra-ui/react'

const Preloader = () => {
    return (
        <Container
            w='550px'
            centerContent='true' >
            <CircularProgress isIndeterminate color='blue.300' />
            {'loading'}
        </Container>
    )
};

export default Preloader;