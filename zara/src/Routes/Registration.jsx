import React, { useState } from "react";
import { Button, Box, Flex, FormLabel, Checkbox } from "@chakra-ui/react";
import {
  Text,
  Input,
  Spacer,
  Divider,
  FormControl,
  FormHelperText,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [formData, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://amit-fake-stoore-test.herokuapp.com/signup`, formData).then((res) => {
      console.log(res.data);
      alert("SignUp Successfull");
      setForm({ name: "", email: "", password: "" });
      navigate("/login");
    });
  };

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
            {/* Form1 */}
            <FormControl>
              <Input
                fontSize="xs"
                required="required"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="E-MAIL"
              />
              <Spacer />
              <br />
              <Input
                fontSize="xs"
                required="required"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="PASSWORD"
              />
              <Spacer /> <br />
              <Input
                required="required"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fontSize="xs"
                type="text"
                placeholder="NAME"
              />
              <Spacer></Spacer>
              <br />
              <Input fontSize="xs" type="text" placeholder="ADDRESS" />
              <Spacer></Spacer>
              <br />
              <Input fontSize="xs" type="text" placeholder="LOCALITY" />
              <Spacer></Spacer>
              <br />
              <Select fontSize="xs" placeholder="Select option">
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
                <Input fontSize="xs" type="number"></Input>
              </Flex>
            </FormControl>
          </Box>
          <Box ml="1em" pt="4em" width={"400px"}>
            {/* Form2 */}
            <FormControl>
              <Input
                fontSize="xs"
                type="password"
                placeholder="REPEAT PASSWORD"
              />
              <Spacer></Spacer>
              <br />
              <Input fontSize="xs" type="text" placeholder="PINCODE" />
              <Spacer></Spacer>
              <br />
              <Input fontSize="xs" type="text" placeholder="MORE INFO" />
              <Spacer></Spacer>
              <br />
              <Input fontSize="xs" type="text" placeholder="CITY" />
              <Spacer></Spacer>
              <br />
              <Input fontSize="xs" type="text" value="India" />
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
            disabled={formData.email === "" || formData.password === ""}
            borderRadius="none"
            type="submit"
            onClick={handleSubmit}
            fontSize="xs"
            color={"white"}
            bg={"black"}
            width={"400px"}
            ml="-10.8em"
          >
            CREATE ACCOUNT
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
