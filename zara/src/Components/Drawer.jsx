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
import Dbody from './Dbody';



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
          <Dbody/>
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