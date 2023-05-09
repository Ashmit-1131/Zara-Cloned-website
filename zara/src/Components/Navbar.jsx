import { Box, Flex, Image, Input, Spacer, Text } from '@chakra-ui/react';
import React, { useEffect,useState} from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authLogout } from "../Redux/auth.redux/authAction";
import DrawerExample from './Drawer';



const Navbar = (page) => {
  const {
    data: { isAuthenticated, user },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [dispatch, isAuthenticated])



  return (
<>


    {/* <DrawerExample l="20px"  /> */}
<Flex alignItems='center' gap={"2em"}  pt={"1em"} pr={"2em"}>
    <Box mt="-55px"  ><DrawerExample  /></Box>
    <NavLink  to="/" ><Image ml="-1.85em" mt="-4px" maxHeight="101px" src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' alt='Zara Logo' /></NavLink>
    <Spacer />
    <Flex width={"21%"} mt="-50px" justify={"space-between"}>
    <NavLink to="/search" ><Box align="left" width={"80px"} fontWeight="600" borderBottom="1px solid black"><Text fontSize="12px">SEARCH</Text></Box></NavLink>
    

   
      
    
    
      <Box gap="6" display={{ base: "flex", md: "flex" }}>
            <Link to={isAuthenticated ? null : "/login"}>
              <Text fontSize="sm" onClick={isAuthenticated ? () => {dispatch(authLogout())} : null} >
                {isAuthenticated ? user.name.toUpperCase() : "LOGIN"}
              </Text>
            </Link>
           
          </Box>
    
    
   
    <NavLink to="/help" ><Text fontSize="12px">HELP</Text></NavLink>
    <NavLink to="/cart" ><Image width={'22px'} height="20px" src='https://cdn-icons-png.flaticon.com/512/3110/3110065.png'></Image></NavLink>
    </Flex>
   </Flex>
   </>
  )
}

export default Navbar