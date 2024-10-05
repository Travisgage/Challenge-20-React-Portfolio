import { Box, Flex, Image } from '@chakra-ui/react';
import Nav from './Navigation';
import HS from '../assets/images/PC-logo2.svg'
export default function Header() {


    return (
        <>
        <Box position="relative" w="100%">
        <Box bg='brand.800' w='100%' p={1}>

        <Box
          position="absolute"
          top="128"
          left="0"
          right="0"
          height="35%"
          zIndex="0"
        />
        <Flex justify={['center', 'space-between']}>
            <Image src={HS} height={40} minW={265} obectfit='cover' marginTop={3}></Image>
        </Flex>
        <Nav></Nav>
        </Box>
        </ Box>

        </>
    )
}