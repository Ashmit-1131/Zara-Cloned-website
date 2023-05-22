import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Image,
  RadioGroup,
  Stack,
  Radio,
  useToast,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL1 } from "../../constants/config";
import Loading from "../../Components/Loading/Loading";
import { CART_UPDATE } from "../../Redux/cart.redux/cartTypes";

const Payment = ({ cart, cartTotal, totalSavings, token, email }) => {
  const [value, setValue] = useState("Cash on delivery");
  const [textArea, setTextArea] = useState("");
  const [loading, setLoading] = useState(false);

  const { name, address, city, pincode, phone, state } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (name === "" || address === "" || pincode === "" || phone === "" || city === "" || state === "") {
      toast({
        description: "Fill in all the details",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setLoading(true);
      let newCartData = cart?.map((el) => {
        el.address = `${name}, ${address},${city}, ${pincode}, ${phone},${state}`;
        el.totalDiscountPrice = 0;
        delete el["_id"];
        return el;
      });

      try {
        let res = await axios.post(BASE_URL1 + "/order/add", newCartData, {
          headers: {
            Authorization: token,
          },
        });

        if (res.data.status === 1) {
          setLoading(false);
          dispatch({ type: CART_UPDATE });

          toast({
            size: "500",
            position: "top-center",
            title: "Order Placed.",
            description: "Thank you for shopping with us.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });

          navigate("/");
        } else {
          setLoading(false);

          toast({
            size: "500",
            position: "top-center",
            title: "Order Error",
            description: "Failed to place the order. Please try again later.",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      } catch (error) {
        setLoading(false);

        toast({
          size: "500",
          position: "top-center",
          title: "Order Error",
          description: "Failed to place the order. Please try again later.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <Box width={{ base: "100%", lg: "90%" }} margin="auto">
      <Box p="2rem">
        <Text textAlign="start">Home » Checkout</Text>
      </Box>
      <Box>
        <Heading size="lg" color="yellow">
          Checkout
        </Heading>
      </Box>
      <Grid templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4} mt={4}>
        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
          <Text fontWeight="bold" mb={2}>
            Billing Details
          </Text>
          <FormControl id="name" mb={4} isRequired>
            <FormLabel>Name</FormLabel>
            <Heading fontSize="2xl" fontFamily="body">
              {name}
            </Heading>
          </FormControl>
          <FormControl id="address" mb={4} isRequired>
            <FormLabel>Address</FormLabel>
            <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
              {address}
            </Text>
          </FormControl>
          <FormControl id="city" mb={4} isRequired>
            <FormLabel>City</FormLabel>
            <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
              {city}
            </Text>
          </FormControl>
          <FormControl id="pinCode" mb={4} isRequired>
            <FormLabel>Pin Code</FormLabel>
            <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
              {pincode}
            </Text>
          </FormControl>
          <FormControl id="phone" mb={4} isRequired>
            <FormLabel>Phone</FormLabel>
            <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
              {phone}
            </Text>
          </FormControl>
          <FormControl id="State" mb={4} isRequired>
            <FormLabel>State</FormLabel>
            <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
              {state}
            </Text>
          </FormControl>
          <FormControl id="notes" mb={4}>
            <FormLabel>Order Notes</FormLabel>
            <Textarea
              type="text"
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
              placeholder="Any additional notes for your order?"
            />
          </FormControl>
        </Box>
        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
          <Text fontWeight="bold" mb={2}>
            Your Order
          </Text>
          {cart?.map((product, index) => (
            <Flex key={index} mb={4} alignItems="center">
              <Image src={product.image} alt={product.title} boxSize={20} mr={2} />
              <Box flex="1">
                <Text fontSize="sm" fontWeight="semibold">
                  {product.title}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {product.quantity} x {product.price}
                </Text>
              </Box>
              <Text fontSize="sm" fontWeight="semibold">
                {product.quantity * product.price}
              </Text>
            </Flex>
          ))}
          <Flex alignItems="center" justifyContent="space-between" mt={6}>
            <Text>Subtotal:</Text>
            <Text>{cartTotal}</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" mt={2}>
            <Text>Savings:</Text>
            <Text>{totalSavings}</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" mt={2}>
            <Text>Total:</Text>
            <Text fontWeight="semibold">{cartTotal - totalSavings}</Text>
          </Flex>
        </Box>
        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
          <Text fontWeight="bold" mb={2}>
            Payment Method
          </Text>
          <RadioGroup onChange={setValue} value={value}>
            <VStack spacing={2} alignItems="start">
              <Radio value="Cash on delivery">Cash on delivery</Radio>
              <Radio value="Credit Card">Credit Card</Radio>
              <Radio value="Debit Card">Debit Card</Radio>
              <Radio value="PayPal">PayPal</Radio>
            </VStack>
          </RadioGroup>
        </Box>
      </Grid>
      <Box mt={4} textAlign="end">
        <Button colorScheme="teal" onClick={handleSubmit}>
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
