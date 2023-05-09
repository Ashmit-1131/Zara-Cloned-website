import { Flex } from '@chakra-ui/react'
import {useToast, Box, Text , Input, Button, Spacer} from "@chakra-ui/react"
import {
  FormControl,
 FormHelperText,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { authLogin } from '../Redux/auth.redux/authAction'
import { useSelector,useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'



const Login = () => {
    const [loginData, setLoginData] = React.useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const { userLogin: { loading, error, message }, data: { isAuthenticated, token, user } } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            toast({
                title: `Welcome ${user.name}`,
                description: "You are in logged in",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            let time = setTimeout(() => {
                navigate("/");
            }, 3000);
            return () => clearTimeout(time);
        }
        if (error) {
            toast({
                title: message,
                description: 'Please try again',
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    }, [isAuthenticated, error]);
  
 return (
   <>
   <Flex mt="8em">

    {/* login box */}
    <Box width={"25%"} ml="3em">
     
    <FormControl>
    <Text fontSize='s'  align="left"><b>LOG IN</b></Text>
    <Spacer/>
   <br/>
    <Input fontSize='xs'   required="required"
     name='email' 
     value={loginData.email}
     onChange={handleChange} type='email' placeholder='E-MAIL'
     id='a' />
    <Spacer/>
    <br/>
    <Input fontSize='xs' 
      required="required"
      name='password' 
      value={loginData.password}
      onChange={handleChange} type='password' placeholder='PASSWORD'
      id='b' />
    <Spacer/>
    <br/>
    <FormHelperText fontSize='8px' align="left" >HAVE YOU FORGOTTEN YOUR PASSWORD?</FormHelperText>
    <Spacer/>   <br/>
    <Button fontSize='xs' borderRadius={"none"} ml="-1em"  color={"white"} bg={"black"} width={"300px"} onClick={() => dispatch(authLogin(loginData))}>LOG IN</Button>
</FormControl>

    </Box>

    {/* registration box */}
    <Box width={"33%"} ml="12em">
    <FormControl>
    <Text fontSize='s' as='b' align="left" ml="-22em">REGISTER </Text>
    <Spacer/>
   <br/>
    <Text fontSize='xs'  align="left">IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</Text>
    <br/>
    <Text fontSize='xs'  align="left">BY GIVING US YOUR DETAILS, PURCHASING IN <b>ZARA.COM</b> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</Text>
    <Spacer/>   <br/>
    <br></br>
    <br/>
    <Link  href='/registration'><Button borderRadius={"none"} fontSize='xs' color={"white"} bg={"black"} width={"300px"}  ml="-10.8em">CREATE ACCOUNT</Button></Link>
</FormControl>

    </Box>

   </Flex>


   
   
   </>
  )
}

export default Login