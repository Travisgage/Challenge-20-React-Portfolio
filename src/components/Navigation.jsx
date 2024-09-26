import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button, textDecoration, border } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Global } from '@emotion/react';

export default function Nav() {
  const buttonStyles = {
    fontSize: "1.1rem",
    bg: "brand.200",
    color: "brand.800",
    _hover: {
      bg: "brand.50",
      color: "brand.300",
    },
    _active: {
      borderColor: "brand.300",
      border: "2px",
    },

  }
    return (
      <Flex as="nav" className="navbar-links" gap={5} position="relative" 
                          direction={['column', 'row']}
                          justify={['center', 'flex-end']}
                          align='left'
                          w='100%'
                          pt={[4,0]}
                          pr={[0,4]}
                          margin={3}
                          >
        <Button as={RouterLink} to="/" {...buttonStyles} aria-label={"About Me"} fontFamily={"monospace"}>
          About
        </Button>
        <Button as={RouterLink} to="/portfolio" {...buttonStyles} aria-label={"Button"} fontFamily={"monospace"}>
          Portfolio
        </Button>
        <Button as={RouterLink} to="/resume" {...buttonStyles} aria-label={"Resume"} fontFamily={"monospace"}>
          Resume
        </Button>
        <Button as={RouterLink} to="/contact" {...buttonStyles} aria-label={"Contact"} fontFamily={"monospace"}>
          Contact
        </Button>
        </Flex>





      );
    }