import { Heading, Box, VStack, Text } from '@chakra-ui/react'
import {   ReactComponent as SVG} from './gitHub.svg' 

const CarouselCard = (props) => {

    const click = () => {
        console.log(`Click: ${props.index}`);
        props.onChange(props.index);
    }

    const getBackgroundColour = () => {
        if (props.index === props.selectedProject) {
            return '#7f5af0'
        } else {
            return '#16161a'
        }
    }

    const getLogoColour = () => {
        if (props.index === props.selectedProject) {
            return '#000000'
        } else {
            return '#2cb67d'
        }
    }

    let backgroundColour = getBackgroundColour();
    let logoColour = getLogoColour();

    return (
        <Box style={{backgroundColor: backgroundColour}} onClick={click}>
            <VStack>
                <Heading>{props.title}</Heading>
                <SVG fill={logoColour} style={{ width: '70%', height: '70%'}}/>
            </VStack>
        </Box>
    )
}

export default CarouselCard; 