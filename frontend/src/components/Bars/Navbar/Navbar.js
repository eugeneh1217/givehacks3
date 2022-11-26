import React from "react";
import MenuIt from "./MenuIt";
import { Box, Flex, Button, Heading, Link} from "@chakra-ui/react";
import CloseIcon from "./Icons/CloseIcon";
import MenuIcon from "./Icons/MenuIcon";


export default function Navbar({isAuthenticated}) {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const handleLogout = () => {
    localStorage.removeItem("SESSION_ID")
    window.location = "/"
  }

  return (
    <Flex
      as="nav"
      align="center"
      position="fixed"
      justify="space-between"
      wrap="wrap"
      w="100%"
      zIndex="1000"
      mb={8}
      p={8}
      px="100px"
      shadow="base"
      bg={["white", "white", "white", "white"]}
      color={["black", "black", "primary.700", "primary.700"]}
    >
      <Flex align="center">
        <Heading size="md">
          <Link href="/">Name of Project</Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", lg: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuIt to="/">Home</MenuIt>
          <MenuIt to="/about">About</MenuIt>
          {isAuthenticated && <Button colorScheme="green" variant="outline" size="lg" onClick={handleLogout}>Logout</Button>}
          {!isAuthenticated && 
          (<><MenuIt to="/login"><Button colorScheme="green" variant="outline" size="lg">Login</Button></MenuIt>
          <MenuIt to="/register"><Button colorScheme="teal" size="lg">Register</Button></MenuIt></>)
          }

        </Flex>
      </Box>
    </Flex>
  );
}
