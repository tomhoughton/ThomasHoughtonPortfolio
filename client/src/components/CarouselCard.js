import { Heading, Box, VStack, Text, Center } from '@chakra-ui/react'
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
        <Center>
            <Box className='CarouselCard' style={{backgroundColor: backgroundColour}} onClick={click}>
                <VStack>
                    <Heading className='CarouselHeading'>{props.title}</Heading>
                    <SVG className='CarouselLogo' fill={logoColour} style={{ width: '70%', height: '70%'}}/>
                </VStack>
            </Box>
        </Center>
    )
}

export default CarouselCard; 
