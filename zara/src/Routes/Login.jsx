import { Flex } from '@chakra-ui/react'
import { Box, Text , Input, Button, Spacer, Divider} from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { AppContext } from '../Context/ContextApp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Components/Footer'

const Login = () => {




  const {setisAuth,handleLogin}=useContext(AppContext)


  const [formData,setForm]=useState({email:"",password:""})
  const navigate=useNavigate()
  const [signUpData,setSignUpData]=useState([])
  
  
  
  useEffect(()=>{
      axios.get(`https://amit-fake-stoore-test.herokuapp.com/signup`).then((res)=>{
          setSignUpData(res.data)
       })
  },[])
  
  const handleChange=(e)=>{
      const {name,value}=e.target
  
      setForm({...formData,[name]:value})
  
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault()
      let mark=false
      let name=null
      signUpData.map((el)=>{
          if(el.email===formData.email && el.password===formData.password)
          {
              mark=true
              name=el.name
              return
          }
      })
   
      if(mark===true)
      {
          handleLogin(name)
          alert("Login successfull")
          navigate("/")
      }
      else{
          alert("login failed")
      }
  }
  
  
  
  













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
     value={formData.email}
     onChange={handleChange} type='email' placeholder='E-MAIL' />
    <Spacer/>
    <br/>
    <Input fontSize='xs' 
      required="required"
      name='password' 
      value={formData.password}
      onChange={handleChange} type='password' placeholder='PASSWORD' />
    <Spacer/>
    <br/>
    <FormHelperText fontSize='8px' align="left" >HAVE YOU FORGOTTEN YOUR PASSWORD?</FormHelperText>
    <Spacer/>   <br/>
    <Button fontSize='xs' borderRadius={"none"} ml="-1em"  onClick={handleSubmit}  color={"white"} bg={"black"} width={"300px"}>LOG IN</Button>
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