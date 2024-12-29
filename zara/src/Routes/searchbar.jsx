import Carouselll from '../Components/Carousel'
import { Input, Box, Text, Flex, VStack } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL1 } from "../constants/config";
import SearchItem from "./SearchItem"
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
} from "../constants/typography";

const Serachbar = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [selectedText, setSelectedText] = useState("WOMAN");
  const nav = useNavigate();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setDisplay(false)
      setSearchData([])
      nav(`/search?q=${search}`);
    }
  };

  useEffect(() => {
    if (search === "") {
      setDisplay(false)
      setSearchData([])
    }
    let getRecomandation = async () => {
      let res = await axios({
        method: "get",
        url: BASE_URL1 + `/search?q=${search}&page=${0}`,
      });

      if (res.data.status === 1) {
        setSearchData(res.data.data);
      } else {
      }
    };
    const timeoutId = setTimeout(() => {
      if (search !== "") {
        getRecomandation();
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  const handleClick = (text) => {
    setSelectedText(text);
  };

  return (
    <>
      <Box mt={{ base: "26em", md: "6em",sm:"6em" }}> 
      
      <Box width="150px" margin="auto">
        <Flex justify="space-between">
          <Text
            fontSize="xs"
            onClick={() => handleClick("WOMAN")}
            fontWeight={selectedText === "WOMAN" ? "bold" : "normal"}
            cursor="pointer"
          >
            WOMAN
          </Text>
          <Text
            fontSize="xs"
            onClick={() => handleClick("MAN")}
            fontWeight={selectedText === "MAN" ? "bold" : "normal"}
            cursor="pointer"
          >
            MAN
          </Text>
          <Text
            fontSize="xs"
            onClick={() => handleClick("KIDS")}
            fontWeight={selectedText === "KIDS" ? "bold" : "normal"}
            cursor="pointer"
          >
            KIDS
          </Text>
        </Flex>
      </Box>
        <br />
        <br />
        <Box ml="2em" mr=".5em" borderBottom="1px" borderColor="black" pb=".4em">
          <VStack position={RELATIVE} w={FILL_PARENT}>
            <Input
              variant="unstyled"
              onKeyDown={handleKeyDown}
              placeholder="search for FRESH FASHION!"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setDisplay(true)
              }}
            />
            <Flex
              overflowY="scroll"
              direction={COLUMN}
              justifyContent={CENTER}
              bg={WHITE}
              zIndex={500}
              display={display ? "block" : "none"}
              position={ABSOLUTE}
              top={10}
              w={FILL_PARENT}
              borderRadius={8}
              maxH={500}
            >
              {searchData?.map((el) => (
                <SearchItem key={el._id} setDisplay={setDisplay} {...el} />
              ))}
            </Flex>
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export default Serachbar