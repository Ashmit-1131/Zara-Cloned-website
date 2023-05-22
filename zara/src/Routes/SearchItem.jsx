import { Badge, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AUTO, CENTER, GAINSBORO, GRAY, ORANGE, POINTER, SB } from "../constants/typography"

 function SearchItem({imageURL,itemGender,productName,_id,setDisplay}){

    const nav = useNavigate()


    return <Flex cursor={POINTER} _hover={{bg:GAINSBORO}} borderRadius={2} w={"95%"} borderBottom={"1px solid orange"} maxH={"100px"} padding={2} justifyContent={SB} alignItems={CENTER} margin={AUTO} onClick={()=>{
        setDisplay(false)
        nav("/products/"+_id)
    
    }}>
        <HStack gap={4}>
        <Image src={imageURL} w={{base:"30px",sm:"40px",md:"50px",lg:"60px"}}></Image>
        <Text color={GRAY} fontSize={{base:"12px",sm:"14px",md:"14px",lg:"16px"}}>{productName}</Text>
        </HStack>
        <Badge colorScheme={ORANGE}>{itemGender}</Badge>



    </Flex>
}
export default SearchItem