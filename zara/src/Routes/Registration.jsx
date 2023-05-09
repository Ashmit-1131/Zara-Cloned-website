import React, {useEffect, useState } from "react";
import {useToast, Button, Box, Flex, FormLabel, Checkbox } from "@chakra-ui/react";
import {
  Text,
  Input,
  Spacer,
FormControl,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";
import { authRegister } from '../Redux/auth.redux/authAction'
import { useNavigate } from "react-router-dom";


const Registration = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
})
const handleInput = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === "checkbox" ? checked : value
    setData({ ...data, [name]: newValue })
}

const dispatch = useDispatch();
const toast = useToast();
const navigate = useNavigate();

const { userRegister: { loading, error, message }, data: { isAuthenticated, token, user } } = useSelector(state => state.auth);

useEffect(() => {
    if (isAuthenticated) {
        toast({
            title: `Welcome${user.name} `,
            description: "Account Created Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
        let time = setTimeout(() => {
           navigate('/')
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
      <Box pl="50px" mt="3em">
        <Stack>
          <Text textAlign="left" fontSize={"10px"}>
            <b>PERSONAL</b>
          </Text>
        </Stack>

        <Flex mt="1.5em">
          <Box width={"400px"}>
           
            <FormControl>
              <Input
                fontSize="xs"
                required="required"
                name="email"
                value={data.email}
                 onChange={handleInput}
                type="email"
                placeholder="E-MAIL"
              />
              <Spacer />
              <br />
              <Input
                fontSize="xs"
                required="required"
                name="password"
                value={data.password}
                 onChange={handleInput}
                type="password"
                placeholder="PASSWORD"
              />
              <Spacer /> <br />
              <Input
                required="required"
                name="name"
                value={data.name} 
                onChange={handleInput}
                fontSize="xs"
                type="text"
                placeholder="NAME"
              />
              <Spacer></Spacer>
              <br />
            
             
              <Select fontSize="xs" placeholder="Select State" value={data.state} onChange={handleInput} name='state'>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </Select>
              <Spacer></Spacer>
              <br />
              <Flex>
                <FormLabel as="none" alignContent={"center"} fontSize="xs">
                  +91
                </FormLabel>
                <Input fontSize="xs" type="number" 
                name="phone"
                value={data.phone}
                 onChange={handleInput}></Input>
              </Flex>
            </FormControl>
          </Box>
          <Box ml="1em" pt="4em" width={"400px"}>
            {/* Form2 */}
            <FormControl>
            <Input fontSize="xs" type="text" placeholder="ADDRESS" name="address" value={data.address}  onChange={handleInput} />
              <Spacer></Spacer>
              <br />
            
              <Input fontSize="xs" type="text" placeholder="PINCODE" name="pincode" value={data.pincode} onChange={handleInput}/>
              <Spacer></Spacer>
              <br />
             
              <Input fontSize="xs" type="text" placeholder="CITY" name="city" value={data.city} onChange={handleInput} />
              <Spacer></Spacer>
              <br />
             
            </FormControl>
          </Box>
        </Flex>
        <Box ml="-58em" mt="1em">
          <Checkbox>
            <Text fontSize="xs">I WISH TO RECEIVE ZARA NEWS ON MY E-MAIL</Text>
          </Checkbox>
        </Box>
        <Box ml="-62.15em">
          <Checkbox>
            <Text fontSize="xs">I ACCEPT THE PRIVACY STATEMENT</Text>
          </Checkbox>
        </Box>

        <Box ml="-42.5em" mt="4em">
          <Button
         
            borderRadius="none"
            type="submit"
           fontSize="xs"
            color={"white"}
            bg={"black"}
            width={"400px"}
            ml="-10.8em"
            onClick={() => dispatch(authRegister(data))}
          >
            CREATE ACCOUNT
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
