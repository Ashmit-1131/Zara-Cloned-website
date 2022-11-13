import React from 'react'
import Carouselll from '../Components/Carousel'
import {Input, Box, Text, Flex} from "@chakra-ui/react"
const Serachbar = () => {
  return (
  <>
   <Box width="150px" margin={"auto"}>
              <Flex justify={"space-between"}>
                <Text fontSize={"xs"} as="b">WOMAN</Text>
                <Text fontSize={"xs"}>MAN</Text>
                <Text fontSize={"xs"}>KIDS</Text>
              </Flex>
              </Box>
    <br/>
    <br/>
    <Box ml="2em" mr=".5em" borderBottom='1px' borderColor='black' pb=".4em"> <Input  variant="unstyled"   placeholder="ENTER SEARCH TERMS" /></Box>
 
  </>
  
    
  )
}

export default Serachbar