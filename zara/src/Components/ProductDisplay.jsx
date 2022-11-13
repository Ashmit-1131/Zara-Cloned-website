

import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



    const productData=(id)=>{
        // console.log(id)
        return fetch(`https://amit-fake-stoore-test.herokuapp.com/women/${id}`).then((res)=>res.json())
    }



const ProductDisplay = () => {

    const params=useParams();
    const [item,setItem]=useState([])
useEffect(()=>{

productData(params.id).then((res)=>setItem(res))


},[])


const addToCart=()=>{

    axios.post(`https://amit-fake-stoore-test.herokuapp.com/cart`, item).then((res) => {
        console.log(res.data);
        alert("ITEM ADDED TO CART");



})

};




// console.log(params.id)

  return (
   <>
   <Flex justify={"space-between"}>

    {/* Box1 */}
   <Box width="11.5em"  mt="11em" ml="3em">
    <Spacer></Spacer>
        <Text align={"left"} fontSize="13px" ><b>MATERIALS, CARE AND ORIGIN</b></Text>
        <Spacer></Spacer>
        <br/>
        <Text align={"left"} fontSize="11px"><b>JOIN LIFE</b></Text>
        <br/>
        <Text align={"left"} fontSize="11px">Care for fiber: at least 65% recycled polyester.</Text>
        <br/>
        <Text align={"left"} fontSize="11px">We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. </Text>
    
        <br/>
        <Box width={"52px"} borderBottom="1px"  borderColor='black'> <Text align={"left"} fontSize="11px" >View more</Text></Box>
       
    </Box>

{/* Box 2 */}
    <Box width="30%" marginLeft={"6em"}>
        <Image objectFit={"cover"} height="480px" src={item.image}></Image>
    </Box>

    {/* Box3 */}
    <Box width="16em" mr="2em">
<Text width="14em" align={"left"}><b>{item.title}</b></Text>

<Text mt="10px" align={"left"} fontSize="10px">{item.desc}</Text>

<Text mt="8px" align={"left"} fontSize="10px"  >{item.category}</Text>

<Text mt="8px" align={"left"} fontSize="xs">₹ {item.price}.00</Text>
<Text align={"left"} fontSize="10px" color={"lightgrey"}>MRP incl. of all taxes</Text>
{/* <br/> */}
{/* <Text align={"left"} fontSize="10px">Size button to be added</Text> */}
<Box borderBottom='1px' borderTop="1px" borderColor='black' mt="5px" >
<Button width={"100%"} fontSize="10px" borderRadius={0} bg={"white"} color="black"  ><Text align={"left"}>XS</Text></Button>
<Button width={"100%"} fontSize="10px" borderRadius={0} bg={"white"} color="black" mt="-22px" alignContent={"start"} >S</Button>
<Button width={"100%"} fontSize="10px" borderRadius={0} bg={"white"} color="black" mt="-22px" >M</Button>
<Button width={"100%"} fontSize="10px" borderRadius={0} bg={"white"} color="black" mt="-22px" >L</Button>
<Button width={"100%"} fontSize="10px" borderRadius={0} bg={"white"} color="black" mt="-22px" >XL</Button>
{/* <Button width={"100%"} fontSize="10px" borderRadius={0} bg={"white"} color="black" mt="-22px" paddingBottom={"-5px"} >XXL</Button> */}
</Box>
<Flex justify={"space-between"}>
<Text align={"left"} fontSize="10px">FIND YOUR SIZE  </Text> <Text fontSize="10px">  SIZE GUIDE</Text>
</Flex>

<br/>
<Button onClick={()=>{addToCart()}} width={"100%"} fontSize="12px" borderRadius={0} bg={"black"} color="white">ADD TO BAG</Button>
<br/>
<br/>
<Text align={"left"} fontSize="10px">CHECK IN-STORE AVAILABILITY</Text>

<Text mt="8px" align={"left"} fontSize="10px">DELIVERY, EXCHANGES AND RETURNS</Text>
    </Box>
   </Flex>
  
   
   
   </>
  )
}

export default ProductDisplay