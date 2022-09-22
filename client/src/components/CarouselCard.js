import { Heading, Box, VStack, Text } from '@chakra-ui/react'
import SVG from './gitHub.svg' 

const CarouselCard = (props) => {

    const click = () => {
        console.log(`Click: ${props.index}`);
        props.onChange(props.index);
    }
    
    return (
        <Box onClick={click}>
            <VStack>
                <Heading>{props.title}</Heading>
                <img style={{ width: '100px', height: '100px'}} src={SVG}/>
            </VStack>
        </Box>
    )
}

export default CarouselCard; 