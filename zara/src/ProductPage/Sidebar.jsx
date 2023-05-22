import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { GREEN } from "../constants/typography";

const SideBar = ({ filter, setFilter }) => {
  
  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: {
        ...prevFilter[name],
        [value]: checked,
      },
    }));
  };
  

  useEffect(()=>{

  },[])


  return (
    <Stack>
      <Text textAlign={"center"} fontWeight="bold" fontSize={"25px"} my={5}>
        {" "}
        REFINE BY
      </Text>

    
       
    

      {/* occassion checkbox   */}

      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"90%"}
        m="auto"
        px={5}
        pb={5}
      >
        <Text textAlign={"left"} fontWeight="bold" fontSize={"22px"} my={3}>
          Category{" "}
        </Text>

        <Box>
          <Box textAlign={"left"}>
            <Box>
            <input
            type="checkbox"
            name="Category"
            value="Shirts"
            checked={filter.itemCategory.SHIRTS}
            onChange={handleCheckboxChange}
          />
              <label htmlFor="Shirt">Shirts</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="Category"
            value="TShirts"
            checked={filter.itemCategory.T-SHIRTS}
            onChange={handleCheckboxChange}
          />
              <label htmlFor="TShirts">T-Shirts</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="Category"
            value="Trousers"
            checked={filter.itemCategory.TROUSERS}
            onChange={handleCheckboxChange}
          />
              <label htmlFor="Trousers">Trousers</label>
            </Box>
            <Box>
            <input
            type="checkbox"
            name="Category"
            value="Sneakers"
            checked={filter.itemCategory.SNEAKERS}
            onChange={handleCheckboxChange}
          />
              <label htmlFor="Sneakers">Sneakers</label>
            </Box>
          </Box>
        </Box>
      </Box>

    

      
    </Stack>
  );
};

export default SideBar;