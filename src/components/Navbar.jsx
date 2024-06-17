import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex>
      <Link as={RouterLink} to="/" color="white" fontWeight="bold" mr={4}>
        Home
      </Link>
      <Link as={RouterLink} to="/about" color="white" fontWeight="bold" mr={4}>
        About
      </Link>
      <Link as={RouterLink} to="/contact" color="white" fontWeight="bold">
        Contact
      </Link>
      <Spacer />
    </Flex>
  </Box>
);

export default Navbar;