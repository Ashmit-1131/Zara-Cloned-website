import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Input, Spacer, Text } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import DrawerExample from './Drawer';
import {
  ABSOLUTE,
  AUTO,
  CENTER,
  COLUMN,
  FILL_55PARENT,
  FILL_90PARENT,
  FILL_PARENT,
  POINTER,
  RELATIVE,
  SB,
  SE,
  START,
  TRANSPARENT,
  WHITE,
} from '../constants/typography';
import { LOGOUT } from '../Redux/auth.redux/authTypes';
import axios from 'axios';
import { BASE_URL1 } from '../constants/config';

const Navbar = () => {
  const [count, setCount] = useState(0);
  const { isAuth, token, name } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const { cartStatus } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let getCount = async () => {
      let res = await axios({
        method: 'get',
        url: BASE_URL1 + '/cart',
        headers: {
          Authorization: token,
        },
      });
      if (res.data.status == 1) {
        setCount(res.data.count);
      }
    };

    if (isAuth) {
      getCount();
    } else {
      setCount(0);
    }
  }, [cartStatus, isAuth]);

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        backgroundColor="white"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        zIndex="999"
        p="1em"
      >
        <Flex alignItems="center" gap="2em" direction={{ base: 'column', md: 'row' }}>
          <Box mt={{ base: '1em', md: '-55px' }}>
            <DrawerExample />
          </Box>
          <NavLink to="/">
            <Image
              ml="-1.85em"
              mt="-4px"
              maxHeight="101px"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
              alt="Zara Logo"
            />
          </NavLink>
          <Spacer />
          <Flex
            width={{ base: '100%', md: '21%' }}
            mt={{ base: '1em', md: '-50px' }}
            justify={{ base: 'center', md: 'space-between' }}
            direction={{ base: 'column', md: 'row' }}
            alignItems="center"
          >
            <NavLink to="/search">
              <Box align="left" width="80px" fontWeight="600" borderBottom="1px solid black">
                <Text fontSize="12px">SEARCH</Text>
              </Box>
            </NavLink>

            <Box gap="6" display={{ base: 'flex', md: 'flex' }}>
              <Text
                fontSize={isAuth ? '16px' : '16px'}
                cursor={POINTER}
                onClick={() => {
                  if (!isAuth) {
                    navigate('/login');
                  } else {
                    navigate('/profile');
                  }
                }}
              >
                {isAuth ? name.split(' ')[0].toUpperCase() : 'LOG IN'}
              </Text>
            </Box>

            <NavLink to="/help">
              <Text fontSize="12px">HELP</Text>
            </NavLink>

            <Box fontWeight="bold">
              <Text
                cursor={POINTER}
                onClick={() => {
                  if (isAuth) {
                    navigate('/cart');
                  }else{
                    alert("You are not Logged In. Please Log In")
                    navigate('/login')
                  }
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 4.9V3.3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.6h4.8V12h-1V5.9H4.7v14H15v1H3.7v-16h4.8zm1-1.6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.6h-5V3.3z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4 23.4v-9h5.4v9l-2.705-2.673L17.4 23.4zm2.694-3.798L22 21.485V15.2h-3.8v6.28l1.894-1.878z"
                  ></path>
                </svg>
                <span style={{ position: 'relative', right: '0px', top: '-26px', fontSize: '12px' }}>{count}</span>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box mt={{ base: '4em', md: '0' }} p="1em" mb={{ base: '4em', md: '0' }}>
      
      </Box>
    </>
  );
};

export default Navbar;
