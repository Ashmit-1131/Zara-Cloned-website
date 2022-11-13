import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CartProductCard = ({item}) => {


  return (
    <>
       <Box width="200px" height={"220px"}>
        <Image objectFit={"cover"}  src={item.image} ></Image>
        <Flex justify={"space-between"}> <Text fontSize={"xs"}>{item.title}</Text>
    <Text fontSize={"xs"}>₹ {item.price}.00</Text></Flex>
   
   </Box>


    
    </>
  )
}

export default CartProductCard