import {
  Box,
  Button,
  filter,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Paginantion from "./Pagination";
import DrawerPro from "./Drawer";
import SideBar from "./Sidebar";
import { BASE_URL,BASE_URL1 } from "../constants/config";
import { CONTAINER } from "../constants/constants";
import { NONE } from "../constants/typography";

const ProductPage = () => {

  let [productlist, setproductlist] = useState([]);
  let [fulldata,setfullData]= useState([]);
  let [isError, setisError] = useState(false);
  let [isloading, setisloading] = useState(false);
  let [griddata, setgriddata] = useState("");
  let [count, setcount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  let [query,setQuery]= useState("");

let [searchParam,setSearchParam] = useSearchParams()



useEffect(() => {
        window.scrollTo(0, 0);
      }, [page]);

  const [filter, setFilter] = useState({
    price: {
      max: false,
      min: false,
    },
 
  
   
    category: {
      Shirts: false,
      TShirts: false,
      Trousers: false,
      Sneakers: false
     
    },
  });

  const search = useLocation().search;
  const catg = new URLSearchParams(search).get("itemGender");
  
  

  
  //filtered object of object
  function findTrueValues(data) {
    const trueValues = {};
    for (const key in data) {
      for (const subKey in data[key]) {
        if (data[key][subKey]) {
          trueValues[key] = subKey;
        }
      }
    }
    return trueValues;
  }

  
 let finalFilter= findTrueValues(filter)

const searchParams = new URLSearchParams(finalFilter);
const queryString = searchParams.toString();



//search box.....
const handleInputChange = (event) => {
  const query = event.target.value.toUpperCase();
  setQuery(query);

if(!query){
  setproductlist(fulldata)
}else{

  const filteredData = productlist.filter(item => item.productName.includes(query));
  setproductlist(filteredData);

}

  
}


let getdata = async (page) => {
  try {
    setisloading(true);
    setisError(false); // Reset error state
    let res = await axios.get(
      `${BASE_URL1}/cloths?itemGender=${catg}&page=${page}&${queryString}`
    );
    setproductlist(res.data.data);
    setfullData(res.data.data);
    setTotalPage(res.data.count);
  } catch (err) {
    setisError(true);
  } finally {
    setisloading(false);
  }
};


  useEffect(() => {
    getdata(page);
  }, [page, filter,query]);

  useEffect(() => {}, [griddata]);



  let handleHigh = () => {
    setcount(count + 1);
    let highdata = productlist.sort((a, b) => {
      return Number(b.price) - Number(a.price);
    });

    setproductlist(highdata);
  };

  let handleLow = () => {
    setcount(count + 1);
    let lowdata = productlist.sort((a, b) => {
      return Number(a.price) - Number(b.price);
    });

    setproductlist(lowdata);
  };

  
  useEffect(() =>{
    setSearchParam({itemGender: `${catg}` ,page:page+1 , ...finalFilter })
  
  },[page, filter])



  if (isloading) {
    return (
      <SimpleGrid
        m="auto"
        w="95%"
        pt={10}
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={15}
      >
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
        <Skeleton height="500px" />
      </SimpleGrid>
    );
  }

  return (
    <Box mt={CONTAINER}>
      {isError !== "" && <h1>{isError}</h1>}

      <Stack direction={{ base: "column", md: "row" }}>
      
        <Box>
          <Stack
            gap={5}
            direction={{ base: "column", md: "row" }}
            px={12}
            mb={5}
            justifyContent={"space-between"}
          >
        

            <HStack gap={5}>
              <Button onClick={handleHigh}> High to Low </Button>
              <Button onClick={handleLow}> Low to High </Button>
            </HStack>

            <HStack gap={4} display={{ base: NONE, lg: "block" }}>
              <Text fontWeight={"bold"}> Shows </Text>
              <Button onClick={() => setgriddata(2)}> 2 </Button>
              <Button onClick={() => setgriddata(3)}> 3 </Button>
              <Button onClick={() => setgriddata(4)}> 4 </Button>
            </HStack>
          </Stack>

     <Stack my={5} >
     <Input w={"90%"} m="auto" type="text" value={query} onChange={handleInputChange} placeholder="Search Items by Title. . . . . . . ." />
     </Stack>


          <SimpleGrid
            columns={
              griddata !== ""
                ? { base: 1, md: 2, lg: griddata }
                : { base: 1, md: 2, lg: 3 }
            }
            gap={10}
            w="90%"
            m={"auto"}
          >
            {productlist.map((el) => (
              <Stack
                key={el._id}
                textAlign="left"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                transition={"transform 2s"}
                _hover={{ transform: "scale(1.1)", border: "2px dotted black" }}
              >
                <Link to={`/products/${el._id}`}>
                  <Image src={el.imageURL} />
                </Link>

                <Stack p={5}>
                  <Heading>
                    {el.productName.charAt(0).toUpperCase() + el.productName.slice(1)}{" "}
                  </Heading>
                  <Text fontSize={"20px"} fontWeight="bold">
                    {" "}
                    Price: ₹ {el.price}
                  </Text>
                  <HStack
                    display={"flex"}
                    justifyContent="center"
                    gap={3}
                    m="auto"
                  >
                  
                  </HStack>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>

      {/* pagination   */}

      <Paginantion
        page={page}
        setPage={setPage}
        divide={10}
        totalPage={totalPage}
      />
    </Box>
  );
};

export default ProductPage;