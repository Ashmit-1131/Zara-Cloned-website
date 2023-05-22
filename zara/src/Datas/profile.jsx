import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import OrderLayout from './OrderLayout';
import { BASE_URL1 } from '../constants/config';
import { CONTAINER } from '../constants/constants';
import { AUTO, BLUE, BLUEVIOLET, CENTER, COLUMN, FILL_30PARENT, FILL_70PARENT, FILL_90PARENT, FILL_PARENT, LARGE, ORANGE, RELATIVE, ROW, START, STICKY, TOP, X2LARGE, YELLOW } from '../constants/typography';
import { LOGOUT } from '../Redux/auth.redux/authTypes';
import Loading from "../Components/Loading/Loading"
import Paginantion from "../ProductPage/Pagination";

export default function Profile() {

  const { token, name, email, address } = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  const [order, setOrder] = useState([])
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {

    const getData = async () => {
      setLoading(true)
      let res = await axios({
        method: "get",
        url: BASE_URL1 + "/order?page=" + page,
        headers: {
          Authorization: token
        }
      })

      if (res.data.status == 1) {

        setOrder(res.data.data)
        setTotalPage(res.data.count)

        setLoading(false)


      } else {

        setLoading(false)
      }
    }

    getData()

  }, [page])

  if (loading) return <Loading />

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("isAuth");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    dispatch({ type: LOGOUT });
    navigate("/"); // Redirect to the home page
  }

  return (
    <Flex width={FILL_90PARENT} direction={{ base: COLUMN, sm: COLUMN, md: COLUMN, lg: ROW }} alignItems={"flex-start"} gap={8} m={AUTO} mt={{ base: 10, sm: 10, md: 10, lg: 160 }}    >

      <Stack
        position={{ base: RELATIVE, sm: RELATIVE, md: RELATIVE, lg: STICKY }}
        top={160}
        borderWidth="1px"
        borderRadius="lg"
        w={{ base: FILL_PARENT, sm: FILL_PARENT, md: FILL_PARENT, lg: FILL_30PARENT }}
        direction={{ base: 'column', md: 'row' }}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            w="100%"
            src={
              "https://i.pravatar.cc/300"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {email}
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {address}
          </Text>
          <Button colorScheme={BLUE} onClick={handleLogout}>{"Logout"}</Button>
        </Stack>
      </Stack>

      <VStack borderRadius="lg"
        alignItems={START} p={4} borderWidth="1px"
        w={{ base: FILL_PARENT, sm: FILL_PARENT, md: FILL_PARENT, lg: FILL_70PARENT }} mt={{ base: 180, sm: 180, md: 180, lg: 0 }} mb={40}>
        <Badge mb={8} fontSize={X2LARGE} colorScheme={YELLOW}>Your Orders</Badge>

        {order?.map((el) => <OrderLayout key={el._id} {...el} />)}

        <Paginantion page={page} totalPage={totalPage} divide={5} setPage={setPage} />

      </VStack>
    </Flex>
  );
}
