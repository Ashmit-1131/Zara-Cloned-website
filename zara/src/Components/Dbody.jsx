import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./moredetails.css";

const Men = [
  { id: 1, text: "NEW", link: "/products1?itemGender=juta&itemCategory=TRAINERS" },
  { id: 2, text: "ZARA ATHLETICZ", link: "/products1?itemGender=male&itemCategory=Zara_Athleticz" },
  { id: 3, text: "BASICSNEW", link: "/products1?itemGender=juta&itemCategory=LOAFERS"},
  { id: 4, text: "TRENDNEW", link: "/products1?itemGender=juta&itemCategory=SANDALS"},
  { id: 5, text: "LINEN", link: "/products1?itemGender=male&itemCategory=Jackets" },
  { id: 6, text: "SUITS", link:  "/products1?itemGender=male&itemCategory=Overshirt"  },
  { id: 7, text: "SHIRTS", link:  "/products1?itemGender=male&itemCategory=Shirt"  },
  { id: 8, text: "T-SHIRTS", link:  "/products1?itemGender=male&itemCategory=T-Shirt" },
  { id: 9, text: "POLO SHIRTS", link: "/products1?itemGender=male&itemCategory=Jackets"  },
  { id: 10, text: "SHORTS", link: "/products1?itemGender=male&itemCategory=Shorts" },
  { id: 11, text: "TROUSERS", link:  "/products1?itemGender=male&itemCategory=Trousers" },
  { id: 12, text: "JEANSNEW", link:  "/products1?itemGender=male&itemCategory=Shorts"  },
  { id: 13, text: "JACKETS", link:  "/products1?itemGender=male&itemCategory=Jackets" },
  { id: 14, text: "HOODIES | SWEATSHIRTS", link:  "/products1?itemGender=male&itemCategory=Zara_Athleticz" },
  { id: 15, text: "KNITWEAR", link:  "/products1?itemGender=male&itemCategory=Knitwear"  },
  { id: 16, text: "OVERSHIRTS", link:  "/products1?itemGender=male&itemCategory=Overshirt"  },
  { id: 17, text: "BLAZERS", link:  "/products1?itemGender=male&itemCategory=Jackets" },
  { id: 18, text: "TRACKSUITS", link:  "/products1?itemGender=male&itemCategory=Trousers"  },
  { id: 19, text: "SHOES", link:  "/products1?itemGender=juta&itemCategory=SHOES"  },
  { id: 20, text: "BAGS | BACKPACKS", link:  "/products1?itemGender=jhola&itemCategory=BACKPACK"  },
  { id: 21, text: "ACCESSORIES", link:  "/products1?itemGender=jhola&itemCategory=WRISTBAND"  },
  { id: 22, text: "SWIMWEAR", link:  "/products1?itemGender=male&itemCategory=Shorts"  },
  { id: 23, text: "PERFUMES", link:  "/products1?itemGender=male&itemCategory=Zara_Athleticz"  }
];


const Women = [
  { id: 1, text: "NEW", link: "/products1?itemGender=female&itemCategory=TROUSERS" },
  { id: 2, text: "BASICS", link: "/products1?itemGender=female&itemCategory=SHIRTS" },
  { id: 3, text: "BLAZERS", link: "/products1?itemGender=female&itemCategory=BLAZERS_COATS" },
  { id: 4, text: "JACKETS | OVERSHIRTS", link: "/products1?itemGender=female&itemCategory=JACKETS_PUFFERS" },
  { id: 5, text: "DRESSES | JUMPSUITS", link: "/products1?itemGender=female&itemCategory=DRESSES_JUMPSUITS" },
  { id: 6, text: "SHIRTS", link: "/products1?itemGender=female&itemCategory=SHIRTS" },
  { id: 7, text: "T-SHIRTS", link: "/products1?itemGender=female&itemCategory=T-SHIRTS" },
  { id: 8, text: "TOPS | CORSETS", link: "/products1?itemGender=female&itemCategory=TOPS_BODYSUITS" },
  { id: 9, text: "HOODIES | SWEATSHIRTS", link: "/products1?itemGender=female&itemCategory=DRESSES_JUMPSUITS" },
  { id: 10, text: "KNITWEAR", link: "/products1?itemGender=female&itemCategory=KNITWEAR" },
  { id: 11, text: "OVERSHIRTS", link: "/products1?itemGender=female&itemCategory=T-SHIRTS" },
  { id: 12, text: "BLAZERS", link: "/products1?itemGender=female&itemCategory=BLAZERS_COATS" },
  { id: 13, text: "TRACKSUITS", link: "/products1?itemGender=female&itemCategory=JEANS" },
  { id: 14, text: "SHOES", link: "/products?itemGender=juta" },
  { id: 15, text: "BAGS | BACKPACKS", link: "/products?itemGender=jhola" },
  { id: 16, text: "ACCESSORIES", link: "/products1?itemGender=female&itemCategory=ACCESSORIES" },
  { id: 17, text: "SWIMWEAR", link: "/products1?itemGender=female&itemCategory=TOPS_BODYSUITS" },
  { id: 18, text: "PERFUMES", link: "/products1?itemGender=female&itemCategory=ACCESSORIES" }
];


const Child = [
  { id: 1, text: "GIRL | 6 - 14 YEARS", link: "/products?itemGender=girls" },
  { id: 2, text: "BOY | 6 - 14 YEARS", link: "/products?itemGender=boys" },
  { id: 3, text: "BABY GIRL | 6 MONTHS - 5 YEARS", link: "/products?itemGender=girls" },
  { id: 4, text: "BABY BOY | 6 MONTHS - 5 YEARS", link: "/products1?itemGender=boys&itemCategory=T-SHIRTS"},
  { id: 5, text: "MINI | 0-12 MONTHS", link: "/products?itemGender=girls" },
  { id: 6, text: "ACCESSORIES", link: "/products1?itemGender=female&itemCategory=ACCESSORIES" },
  { id: 7, text: "JOIN LIFE", link: "/products?itemGender=girls" }
];


function Dbody() {
  const [data, setData] = useState(Women);
  const [selectedLink, setSelectedLink] = useState("/women/new");

  const handleCategoryClick = (category) => {
    setData(category);
  };

  const handleItemClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <Box className="scrolldetails">
      <Flex gap={6}>
        <Box
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleCategoryClick(Women);
            handleItemClick("/women/new");
          }}
          fontWeight={selectedLink === "/women/new" ? "bold" : "normal"}
        >
          Women
        </Box>
        <Box
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleCategoryClick(Men);
            handleItemClick("/men/new");
          }}
          fontWeight={selectedLink === "/men/new" ? "bold" : "normal"}
        >
          Men
        </Box>
        <Box
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleCategoryClick(Child);
            handleItemClick("/child/girl");
          }}
          fontWeight={selectedLink === "/child/girl" ? "bold" : "normal"}
        >
          Child
        </Box>
      </Flex>
      <Box mt={20}>
        {data &&
          data.map(({ id, text, link }) => (
            <Text key={id} fontSize="xs" fontWeight={400}>
              <Link to={link} onClick={() => handleItemClick(link)}>
                {text}
              </Link>
            </Text>
          ))}
      </Box>
      <Box ml={-6} mr={-6} mt={8}>
        <Text fontSize="xs" backgroundColor="teal" p={2} pl={6} fontWeight={400}>
          SALE
        </Text>
      </Box>
      <Box mt={8} mb={8}>
        <Text fontSize="xs" fontWeight={400}>
          +INFO
        </Text>
      </Box>
    </Box>
  );
}

export default Dbody;
