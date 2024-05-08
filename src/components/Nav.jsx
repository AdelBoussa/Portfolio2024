import React, { useState } from 'react';
import { Box, IconButton, Collapse, VStack, Link, Center } from '@chakra-ui/react';
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box bg="brand.200" color="brand.50" position="fixed" px={2} py={4} zIndex="banner" width="100vw" top="0" left="0">
        <Center bg="brand.200" color="brand.50">
        <IconButton
            icon={isOpen ? <SmallCloseIcon w={30} h={30} /> : <HamburgerIcon w={30} h={30} />}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            variant="unstyled"  // Use 'unstyled' or another variant that fits your design
            _focus={{ outline: 'none' }}
            _active={{ outline: 'none'}}
            _hover={{ outline: 'none', color: 'brand.100' }}
            />
        </Center> 
        <Collapse in={isOpen} animateOpacity>
            <VStack
            p={4}
            color="brand.50"
            bg="brand.200"
            spacing={4}
            align="stretch"
            
            >
            <Link _hover={{color: 'brand.100' }}href="#">Home</Link>
            <Link _hover={{color: 'brand.100' }}href="#">About</Link>
            <Link _hover={{color: 'brand.100' }}href="#">Projects</Link>
            <Link _hover={{color: 'brand.100' }}href="#">Contact</Link>
            </VStack>
        </Collapse>
    </Box>
  );
};

export default Nav;
