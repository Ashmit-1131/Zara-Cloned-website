import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Flex,
    Box,
    Text,
    Image,
  } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';



function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button background="none" ref={btnRef}  onClick={onOpen}>
        <AiOutlineMenu color="black" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader ><Image  maxHeight="92px" src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' alt='Zara Logo' /></DrawerHeader>
  
            <DrawerBody mt="60px">
             <Box width="150px">
              <Flex justify={"space-between"}>
                <Text fontSize={"xs"} as="b">WOMAN</Text>
                <Text fontSize={"xs"}>MAN</Text>
                <Text fontSize={"xs"}>KIDS</Text>
              </Flex>
              <br/>
              <br/>
              <Box>
              <Text  fontSize={"xs"}>NEW</Text>
              <Text  fontSize={"xs"}>WEAR TO WORK</Text>
              <Text  fontSize={"xs"}>BEST SELLERS</Text>
              <Text  fontSize={"xs"}>BLAZERS</Text>
              <Text  fontSize={"xs"}>DRESSES | JUMPSUITS</Text>
              <Text  fontSize={"xs"}>SHIRTS</Text>
              <Text  fontSize={"xs"}>TOPS | CORSETS</Text>
              <Text  fontSize={"xs"}>TROUSERS</Text>
              <Text  fontSize={"xs"}>JEANS</Text>
              <Text  fontSize={"xs"}>T-SHIRTS</Text>
              <Text  fontSize={"xs"}>BODYSUITS</Text>
              <Text  fontSize={"xs"}>SHORTS | SKORTS</Text>
              <Text  fontSize={"xs"}>SKIRTS</Text>
              <Text  fontSize={"xs"}>BASICS</Text>
              <Text  fontSize={"xs"}>CO-ORD SETS</Text>
              <Text  fontSize={"xs"}>SUITS</Text>
              <Text  fontSize={"xs"}>KNITWEAR</Text>
              <Text  fontSize={"xs"}>SWEATSHIRTS</Text>
              <Text  fontSize={"xs"}>JACKETS | OVERSHIRTS</Text>
              <Text  fontSize={"xs"}>ACCESSORIES</Text>
              <Text  fontSize={"xs"}>COATS | TRENCH COATS</Text>
              <Text  fontSize={"xs"}>SHOES</Text>
              <Text  fontSize={"xs"}>BAGS</Text>
              <Text></Text>
              </Box>











             </Box>
            </DrawerBody>
  
            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }



  export default DrawerExample;