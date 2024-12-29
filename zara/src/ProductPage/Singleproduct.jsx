import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  Skeleton,
  useToast,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL1 } from "../constants/config";
import { CONTAINER } from "../constants/constants";
import { CART_UPDATE } from "../Redux/cart.redux/cartTypes";

const SingleProduct = () => {
  const { token, isAuth } = useSelector((state) => state.authReducer);
  let params = useParams();
  let { id } = params;
  const nav = useNavigate();
  const [value, setValue] = useState("M");
  let [prodata, setProdata] = useState({});
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [arrayData, setArrayData] = useState([]);
  const [present, setPresent] = useState(false);
  const toast = useToast();
  const [cartLoading, setCartLoading] = useState(false);
  const dispatch = useDispatch();

  const getMyData = async (id) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL1}/cloths/${id}`);
      setProdata(res.data.data[0]);
      setArrayData(res.data.data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${BASE_URL1}/cart/${id}`,
          headers: {
            Authorization: token,
          },
        });

        if (res.data.status === 1) {
          setPresent(true);
        }
      } catch (err) {
        if (err.response?.status === 401) {
          toast({
            title: "Unauthorized",
            description: "Please log in to view your cart.",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          nav("/login");
        }
      }
    };
    if (token) getStatus();
  }, [id, token, nav, toast]);

  useEffect(() => {
    getMyData(id);
  }, [id]);

  const handleAdd = async () => {
    setCartLoading(true);
    let cartItem = [
      { ...prodata, quantity: 1, pid: prodata._id, sizes: value },
    ];
    delete cartItem[0]["_id"]; // Remove the existing ID

    try {
      const res = await axios({
        method: "post",
        url: `${BASE_URL1}/cart/add`,
        data: cartItem,
        headers: {
          Authorization: token,
        },
      });

      if (res.data.status === 1) {
        dispatch({ type: CART_UPDATE });
        setPresent(true);
        toast({
          title: "Item Added",
          description: res.data.message,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to Add",
          description: res.data.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (err) {
      if (err.response?.status === 401) {
        toast({
          title: "Unauthorized",
          description: "Please log in to add items to your cart.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        nav("/login");
      } else {
        toast({
          title: "Error",
          description: "Failed to add the item to the cart.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } finally {
      setCartLoading(false);
    }
  };

  if (isLoading) {
    return (
      <HStack m="auto" w="80%" mt={30}>
        <Skeleton height="600px" w="600px" />
        <Skeleton height="600px" w="600px" />
      </HStack>
    );
  }

  return (
    <Box mt={CONTAINER}>
      {error !== "" && <Heading> Error: {error}</Heading>}

      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box
          width={{ base: "100%", md: "11.5em" }}
          mt={{ base: "0", md: "11em" }}
          ml={{ base: "0", md: "3em" }}
        >
          <Spacer />
          <Text align="left" fontSize="13px">
            <b>MATERIALS, CARE AND ORIGIN</b>
          </Text>
          <Spacer />
          <br />
          <Text align="left" fontSize="11px">
            <b>JOIN LIFE</b>
          </Text>
          <br />
          <Text align="left" fontSize="11px">
            Care for fiber: at least 65% recycled polyester.
          </Text>
          <br />
          <Text align="left" fontSize="11px">
            We use the Join Life label on clothing that is produced using
            technology and raw materials that help us to reduce the
            environmental impact of our products.
          </Text>
          <br />
          <Box width="52px" borderBottom="1px" borderColor="black">
            <Text align="left" fontSize="11px">
              View more
            </Text>
          </Box>
        </Box>

        {arrayData.map((el) => (
          <Box
            key={el._id}
            width="30%"
            marginLeft={{ base: "0", md: "6em" }}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            transition="transform 2s"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image objectFit="cover" height="600px" src={el.imageURL} />
          </Box>
        ))}

        <Box width="16em" mr="2em">
          <Text width="14em" align="left">
            <b>{prodata.productName}</b>
          </Text>
          <Text mt="10px" align="left" fontSize="10px">
            ₹ {prodata.price}
          </Text>
          <Text mt="8px" align="left" fontSize="10px">
            {prodata.itemCategory}
          </Text>
          <Text mt="8px" align="left" fontSize="xs">
            ₹ {prodata.strikedPrice}
          </Text>
          <Text align="left" fontSize="10px" color="lightgrey">
            MRP incl. of all taxes
          </Text>
          <Box borderBottom="1px" borderTop="1px" borderColor="black" mt="5px">
            <RadioGroup onChange={setValue} value={value}>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <Button
                  key={size}
                  width="100%"
                  fontSize="10px"
                  borderRadius={0}
                  bg="white"
                  color="black"
                >
                  <Radio value={size}>{size}</Radio>
                </Button>
              ))}
            </RadioGroup>
          </Box>
          <Flex justify="space-between">
            <Text align="left" fontSize="10px">
              FIND YOUR SIZE
            </Text>
            <Text fontSize="10px">SIZE GUIDE</Text>
          </Flex>
          <br />
          <Button
            onClick={() => {
              if (isAuth) {
                if (!present) {
                  handleAdd();
                } else {
                  nav("/cart");
                }
              } else {
                toast({
                  title: "Login Required",
                  description: "You need to log in first to perform this action.",
                  status: "warning",
                  duration: 2000,
                  position: "top",
                  isClosable: true,
                });
                nav("/login");
              }
            }}
            width="100%"
            fontSize="12px"
            borderRadius={0}
            bg="black"
            color="white"
          >
            <BsFillCartCheckFill fill="white" />
            <Text fontSize="20px" ml="10px" color="white">
              {present ? "GO TO BAG" : "ADD TO BAG"}
            </Text>
          </Button>
          <br />
          <br />
          <Text align="left" fontSize="10px">
            CHECK IN-STORE AVAILABILITY
          </Text>
          <Text mt="8px" align="left" fontSize="10px">
            DELIVERY, EXCHANGES AND RETURNS
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
