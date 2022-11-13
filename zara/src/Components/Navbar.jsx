import { Box, Flex, Image, Input, Spacer, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { AppContext } from '../Context/ContextApp';
import DrawerExample from './Drawer';



const Navbar = () => {

  const {isAuth}=useContext(AppContext)


  return (
<>


    {/* <DrawerExample l="20px"  /> */}
<Flex alignItems='center' gap={"2em"}  pt={"1em"} pr={"2em"}>
    <Box mt="-55px"  ><DrawerExample  /></Box>
    <NavLink  to="/" ><Image ml="-1.85em" mt="-4px" maxHeight="101px" src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' alt='Zara Logo' /></NavLink>
    <Spacer />
    <Flex width={"21%"} mt="-50px" justify={"space-between"}>
    <NavLink to="/search" ><Box align="left" width={"80px"} fontWeight="600" borderBottom="1px solid black"><Text fontSize="12px">SEARCH</Text></Box></NavLink>
    
    {
      isAuth.auth===true?
      <>
      <Text fontSize="12px" textTransform="uppercase">{isAuth.name}</Text>
      </>:
      <>
       <NavLink to="/login" ><Text fontSize="12px">LOG IN</Text></NavLink>
      </>
    }
    
    
    
   
    <NavLink to="/help" ><Text fontSize="12px">HELP</Text></NavLink>
    <NavLink to="/cart" ><Image width={'22px'} height="20px" src='https://cdn-icons-png.flaticon.com/512/3110/3110065.png'></Image></NavLink>
    </Flex>
   </Flex>
   </>
  )
}

export default Navbar