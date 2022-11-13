import { Flex, Box , Image , Text, Link} from '@chakra-ui/react'
import React from 'react'

const WomenCard = ({item}) => {
  return (
    <Box width={"60%"} margin="auto">
        <br/>
       <Link href={`/women/${item.id}`}> <Image margin={"auto"} maxHeight={"500px"} src={item.image}></Image></Link>
        <Flex justifyContent={"space-around"}>
        <Text fontSize="10px" >{item.title}</Text>
        {/* <Text fontSize="xs">{item.price}</Text> */}
        </Flex>
    </Box>
  )
}

export default WomenCard