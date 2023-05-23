import { Badge, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { CANCELLED, DELIVERED, DISPATCHED, ORDERED, RUPEES_SYMBOL } from "../constants/constants";
import { BOLD, CENTER, FILL_10PARENT, FILL_30PARENT, FILL_70PARENT, FILL_90PARENT, GREEN, ITALIC, LARGE, MEDIUM, ORANGE, RED, SMALL, START, YELLOW } from "../constants/typography";
import futureDate from "../ProductPage/CartPage/futureDate"

export default function OrderLayout({imageURL,
     productName,
    price,
  status,
  orderDate,
    quantity,
    address
   }){
        

    return <Flex borderBottom={"1px solid orange"} alignItems={"flex-start"} gap={4}>

        <Image w={FILL_10PARENT} src={imageURL}></Image>
        <VStack w={FILL_90PARENT} alignItems={START}>
            <Text fontSize={LARGE} fontWeight={BOLD}>{productName} </Text>
            <Text fontSize={MEDIUM} fontStyle={ITALIC}>{RUPEES_SYMBOL+" "+price*quantity}</Text>
            <Text fontSize={SMALL} fontWeight={BOLD} >{"Qty: x"+quantity}</Text>
            <HStack><Text fontWeight={BOLD}>Order Status: </Text><Badge colorScheme={status==ORDERED?YELLOW:status==DISPATCHED?ORANGE:status==DELIVERED?GREEN:RED}>{status}</Badge></HStack>
            {status!=DELIVERED&&status!=CANCELLED&&<Text color={GREEN}>Expected delivery: {futureDate(Number(orderDate),3)}</Text>}
            <Text textAlign={START}>{address}</Text>

        </VStack>

    </Flex>
}