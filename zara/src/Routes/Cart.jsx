import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartProductCard from '../Components/CartProductCard'
import {VscBookmark} from "react-icons/vsc"


const cartData=()=>{

return axios("https://amit-fake-stoore-test.herokuapp.com/cart")

}


const Cart = () => {

  const [cart,setCart]=useState([]);



useEffect(()=>{

cartData().then((res)=>setCart(res.data))

},[])




  return (
    <>
   <Box width={"140px"} mt="4em" ml="4em" mb="4em">
    <Flex justify={"space-between"} >
      <Text as="b">CART</Text>
      <Flex> <Text >WISHLIST</Text><Box mt={".4em"} ><VscBookmark  /></Box></Flex>
    
    </Flex>
   </Box>
   <Box  width={"90%"} margin="auto">
    <SimpleGrid columns={4} spacing={10}> {
    cart.map((item)=> <CartProductCard item={item} />)
   }
    </SimpleGrid>
    </Box>
    </>
  )
}

export default Cart