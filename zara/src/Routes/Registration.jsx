import React, { useEffect, useState } from "react";
import {
  useToast,
  Button,
  Box,
  Flex,
  FormLabel,
  Checkbox,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Text,
  Input,
  Spacer,
  FormControl,
  Select,
  Stack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BASE_URL1 } from "../constants/config";
import { useNavigate } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import { CONTAINER } from "../constants/constants";
import Loading from "../Components/Loading/Loading";
import { ORANGE, POINTER, UNDERLINE } from "../constants/typography";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (password.length < 5) {
      alert("Please Provide 5 minimum digit password");
    } else if (!email.includes("@")) {
      alert(" @ missing, Please fill correct emailID");
    } else if (phone.length !== 10) {
      alert("Phone no. should be 10 digit");
    } else {
      let payload = {
        name,
        email,
        password,
        phone,
        address,
        city,
        state,
        pincode,
      };
      setLoading(true);
      fetch(`${BASE_URL1}/user/register`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status == 1) {
            setLoading(false);
            toast({
              title: "Account created.",
              description: res.message,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            navigate("/login");
          } else {
            setLoading(false);
            toast({
              title: "error.",
              description: res.message,
              status: "failed",
              duration: 3000,
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          toast({
            title: "Error",
            description: "Please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Box pl={{ base: "20px", md: "50px" }} mt={{ base: "20em", md: "12em",sm:"26em" }}>
        <Stack>
          <Text textAlign="left" fontSize={{ base: "xs", md: "sm" }}>
            <b>PERSONAL DETAILS</b>
          </Text>
        </Stack>

        <Flex mt={{ base: "1em", md: "1.5em"}}>
          <Box width={{ base: "100%", md: "400px" }}>
            <FormControl>
              <Input
                fontSize={{ base: "xs", md: "sm" }}
                required="required"
                name="email"
                type="email"
                placeholder="E-MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Spacer />
              <br />

              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <HStack>
                <FcInfo />
                <Text fontSize="xs" as="i">
                  Passwords must be at least 5 characters
                </Text>
              </HStack>
              <Spacer /> <br />
              <Input
                required="required"
                name="name"
                fontSize={{ base: "xs", md: "sm" }}
                type="text"
                placeholder="NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Spacer></Spacer>
              <br />

              <Select
                fontSize={{ base: "xs", md: "sm" }}
                placeholder="Select State"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
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
                <FormLabel
                  as="none"
                  alignContent={"center"}
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  +91
                </FormLabel>
                <Input
                  fontSize={{ base: "xs", md: "sm" }}
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Input>
              </Flex>
            </FormControl>
          </Box>
          <Box ml="1em" pt="4em" width={{ base: "100%", md: "400px" }}>
            {/* Form2 */}
            <FormControl>
              <Input
                fontSize={{ base: "xs", md: "sm" }}
                type="text"
                placeholder="ADDRESS"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Spacer></Spacer>
              <br />

              <Input
                fontSize={{ base: "xs", md: "sm" }}
                type="text"
                placeholder="PINCODE"
                name="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <Spacer></Spacer>
              <br />

              <Input
                fontSize={{ base: "xs", md: "sm" }}
                type="text"
                placeholder="CITY"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Spacer></Spacer>
              <br />
            </FormControl>
          </Box>
        </Flex>
        <Box ml="-58em" mt="1em">
          <Checkbox>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              I WISH TO RECEIVE ZARA NEWS ON MY E-MAIL
            </Text>
          </Checkbox>
        </Box>
        <Box ml="-62.15em">
          <Checkbox>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              I ACCEPT THE PRIVACY STATEMENT
            </Text>
          </Checkbox>
        </Box>

        <Box ml="-42.5em" mt="4em">
        <Button
          borderRadius="none"
          type="submit"
          fontSize={{ base: "xs", md: "sm" }}
          color={"white"}
          bg={"black"}
          width={{ base: "100%", md: "400px" }}
          
          mt={4}
          onClick={handleSubmit}
        >
          CREATE ACCOUNT
        </Button>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
