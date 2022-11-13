import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box height={"400px"} >
    <Text pt="250px" textDecor={"none"}>JOIN OUR NEWSLETTER</Text>
    </Box>
    <Box width="350px" margin={"auto"}>
        <Flex justify={"space-between"}>
        <Text fontSize={"10px"}>INSTAGRAM</Text>
        <Text fontSize={"10px"}>FACEBOOK</Text>
        <Text fontSize={"10px"}>TWITTER</Text>
        <Text fontSize={"10px"}>PINTEREST</Text>
        <Text fontSize={"10px"}>YOUTUBE</Text>
        <Text fontSize={"10px"}>SPOTIFY</Text>
        </Flex>
    </Box>
    <Box mt="100px" mb="55px" ml="2.5em">
        <Text fontSize={"10px"} align="left">Name and address of the manufacturer:</Text>
        <Text fontSize={"10px"} align="left">Industria de Diseño Textil, S.A. (INDITEX, S.A.)</Text>
        <Text fontSize={"10px"} align="left">Avenida de la Diputación, Edificio Inditex, 15143, Arteixo (A Coruña), Spain</Text>
    </Box>
    </>
  )
}

export default Footer