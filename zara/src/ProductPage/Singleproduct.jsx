import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Spacer,
    SimpleGrid,
    Stack,
    Text,
    Skeleton,
    useToast,
    Grid,
    Flex,
    RadioGroup,
    Radio
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { BsFillCartCheckFill, BsFillStarFill } from "react-icons/bs";
  import { HiInformationCircle } from "react-icons/hi";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate, useParams } from "react-router-dom";
  import { BASE_URL1 } from "../constants/config";
  import { CONTAINER } from "../constants/constants";
  import { AUTO, CENTER, FILL_PARENT, R1, R3 } from "../constants/typography";
  import { CART_UPDATE } from "../Redux/cart.redux/cartTypes";
  
  const SingleProduct = () => {
    const {token,isAuth} = useSelector((state)=>state.authReducer)
    let params = useParams();
    let { id } = params;
    const nav = useNavigate()
    const [value, setValue] = useState("M"); 
    let [prodata, setprodata] = useState({});
    let [error, seterror] = useState("");
    let [isloading, setisloading] = useState(false);
    let [arraydata, setarraydata] = useState([]);
    const [presnet,setPresent]=useState(false)
    const toast = useToast()
    const [cartLoading,setCartLoading] = useState(false)
    const dispatch = useDispatch()
  
    let getmydata = async (id) => {
      try {
        setisloading(true);
        let res = await axios.get(`${BASE_URL1}/cloths/${id}`);
        setprodata(res.data.data[0]);
        setarraydata(res.data.data);
        setisloading(false);
        console.log(arraydata)
      } catch (err) {
        seterror(err.message);
      }
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    useEffect(()=>{
      const getStatus=async()=>{
        let res =await axios({
          method :"get",
          url:BASE_URL1+`/cart/${id}`,
          headers:{
            Authorization:token
          }
        })
  
  
  
        if(res.data.status==1){
          setPresent(true)
  
        }else{
        }
      }
      getStatus()
  
  
  
    },[])
  
    useEffect(() => {
      getmydata(id);
    }, [id]);
  
  
  
    const handleAdd = async()=>{
      setCartLoading(true)
      let cartItem = [{...prodata,quantity:1,pid:prodata._id,sizes:"M"}]
      delete cartItem[0]["_id"] //delete previous id
      let res =await axios({
        method :"post",
        url:BASE_URL1+`/cart/add`,
        data:cartItem,
        headers:{
          Authorization:token
        }
      })
  
      if(res.data.status==1){
        dispatch({type:CART_UPDATE})
        setPresent(true)
        setCartLoading(false)
  
        toast({
          title: 'Item added in cart',
          description: res.status.message,
          status: 'success',
          duration: 2000,
          position: "top",
          isClosable: true,
        })
  
      }else{
        setCartLoading(false)
        toast({
          title: 'Failed to add in Cart',
          description: res.status.message,
          status: 'error',
          position:"top",
          duration: 2000,
          isClosable: true,
        })
      }
  
    }
  
  
  
    if (isloading) {
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
  
        <Box width={{ base: "100%", md: "11.5em" }} mt={{ base: "0", md: "11em" }} ml={{ base: "0", md: "3em" }}>
          <Spacer />
          <Text align="left" fontSize="13px"><b>MATERIALS, CARE AND ORIGIN</b></Text>
          <Spacer />
          <br/>
          <Text align="left" fontSize="11px"><b>JOIN LIFE</b></Text>
          <br/>
          <Text align="left" fontSize="11px">Care for fiber: at least 65% recycled polyester.</Text>
          <br/>
          <Text align="left" fontSize="11px">We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. </Text>
          <br/>
          <Box width="52px" borderBottom="1px" borderColor="black">
            <Text align="left" fontSize="11px">View more</Text>
          </Box>
        </Box>
  
        {arraydata.map((el) => (
          <Box key={el.id} width="30%" marginLeft={{ base: "0", md: "6em" }} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" transition="transform 2s" _hover={{ transform: "scale(1.1)" }}>
            <Image objectFit="cover" height="600px" src={el.imageURL} />
          </Box>
        ))}
  
        <Box width="16em" mr="2em">
          <Text width="14em" align="left"><b>{prodata.productName}</b></Text>
          <Text mt="10px" align="left" fontSize="10px">₹ {prodata.price}</Text>
          <Text mt="8px" align="left" fontSize="10px">{prodata.itemCategory}</Text>
          <Text mt="8px" align="left" fontSize="xs">₹ {prodata.strikedPrice}</Text>
          <Text align="left" fontSize="10px" color="lightgrey">MRP incl. of all taxes</Text>
          <Box borderBottom="1px" borderTop="1px" borderColor="black" mt="5px">
            <RadioGroup onChange={setValue} value={value}>
              <Button width="100%" fontSize="10px" borderRadius={0} bg="white" color="black">
                <Radio value="XS">XS</Radio>
              </Button>
              <Button width="100%" fontSize="10px" borderRadius={0} bg="white" color="black">
                <Radio value="S">S</Radio>
              </Button>
              <Button width="100%" fontSize="10px" borderRadius={0} bg="white" color="black">
                <Radio value="M">M</Radio>
              </Button>
              <Button width="100%" fontSize="10px" borderRadius={0} bg="white" color="black">
                <Radio value="L">L</Radio>
              </Button>
              <Button width="100%" fontSize="10px" borderRadius={0} bg="white" color="black">
                <Radio value="XL">XL</Radio>
              </Button>
            </RadioGroup>
          </Box>
          <Flex justify="space-between">
            <Text align="left" fontSize="10px">FIND YOUR SIZE</Text>
            <Text fontSize="10px">SIZE GUIDE</Text>
          </Flex>
          <br/>
          <Button onClick={() => {
            if (isAuth) {
              if (!presnet) {
                handleAdd();
              } else {
                nav("/cart");
              }
            } else {
              nav("/login");
            }
          }} width="100%" fontSize="12px" borderRadius={0} bg="black" color="white">
            <BsFillCartCheckFill fill="white" />
            <Text fontSize="20px" ml="10px" color="white">
              {presnet ? "GO TO BAG" : "ADD TO BAG"}
            </Text>
          </Button>
          <br/>
          <br/>
          <Text align="left" fontSize="10px">CHECK IN-STORE AVAILABILITY</Text>
          <Text mt="8px" align="left" fontSize="10px">DELIVERY, EXCHANGES AND RETURNS</Text>
        </Box>
  
      </Flex>
    </Box>
    
    );
  };
  
  export default SingleProduct;