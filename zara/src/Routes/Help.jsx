import { SimpleGrid , Box, Text, Image} from '@chakra-ui/react'
import React from 'react'

const Help = () => {
  return (
    <>
    <br/>
    <br></br>
    <Text mt="2em" ml="3em" align={"left"}  ><b>HELP</b></Text>
    <SimpleGrid marginTop="5em" columns={6} spacing={8}>
  
    <Box margin={"auto"} width={"125px"}><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-bag.svg?ts=1550654368093'></Image><Text fontSize='xs' as='b' >SHOP AT ZARA.COM</Text></Box>
    <Box  margin={"auto"} width={"125px"}><Image  margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-shipping.svg?ts=1550654368093'></Image><Text fontSize='xs' as='b'>SHIPPING AND ORDER STATUS</Text></Box>
    <Box margin={"auto"} width={"125px"}><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-returns.svg?ts=1550654368093'></Image><Text fontSize='xs' as='b'>EXCHANGES AND RETURNS</Text></Box>
    <Box margin={"auto"} width={"125px"}><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-payment.svg?ts=1550654368093'></Image><Text fontSize='xs' as='b'>PAYMENT</Text></Box>
    <Box margin={"auto"} width={"125px"} ><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-product.svg?ts=1550654368093'></Image><Text fontSize='xs' as='b'>PRODUCT</Text></Box>
    <Box margin={"auto"} width={"125px"}><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-gift-card.svg?ts=1591250800807'></Image><Text fontSize='xs' as='b'>GIFT CARD</Text></Box>
    <Box margin={"auto"} width={"125px"}><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-stores-and-company.svg?ts=1550654368093'></Image><Text fontSize='xs' as='b'>SHOPS AND COMPANY</Text></Box>
    <Box margin={"auto"} width={"125px"}><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-clothes-collection-info.svg?ts=1614071652367'></Image><Text fontSize='xs' as='b'>CLOTHES COLLECTION PROGRAMME</Text></Box>
    <Box margin={"auto"} width={"125px"}><Image margin={"auto"} width={"40px"} src='https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-zara-id.svg?ts=1629805802513'></Image><Text fontSize='xs' as='b'>ZARA QR</Text></Box>

    </SimpleGrid>
    </>
  )
}

export default Help