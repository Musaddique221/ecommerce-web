<<<<<<< HEAD
import {
  Box,
  Flex,
  Heading,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { logout } from "../actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loadingDetails, errorDetails, user } = userDetails;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      p="6"
      backgroundColor="gray.600"
      w="100%"
      top="0"
      pos="fixed"
      zIndex="99"
    >
      <Heading
        as="h1"
        color="whiteAlpha.600"
        fontWeight="bold"
        size="md"
        letterSpacing="md"
      >
        <Link
          as={RouterLink}
          to="/"
          _hover={{ color: "whiteAlpha.800", textDecoration: "none" }}
        >
          ShopNow
        </Link>
      </Heading>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="white" w="5" h="5"></Icon>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: 5, md: 0 }}
        lineHeight={{ base: 2, md: 0 }}
        alignItems="center"
      >
        <Link
          as={RouterLink}
          to="/cart"
          fontSize="sm"
          letterSpacing="wide"
          color="whiteAlpha.600"
          fontWeight="bold"
          textTransform="uppercase"
          mr="5"
          display="flex"
          alignItems="center"
          _hover={{ color: "whiteAlpha.800" }}
        >
          <Icon as={HiShoppingBag} mr="1" w="4" h="4"></Icon>
          cart
        </Link>

        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecor: "none", opacity: "0.7" }}
            >
              {(userInfo.name !== user.name && user.name) || userInfo.name}
            </MenuButton>
            <MenuList>
              <MenuItem h="10" as={RouterLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem h="10" onClick={logoutHandler}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link
            as={RouterLink}
            to="/login"
            fontSize="sm"
            letterSpacing="wide"
            color="whiteAlpha.600"
            fontWeight="bold"
            textTransform="uppercase"
            mr="5"
            display="flex"
            alignItems="center"
            _hover={{ color: "whiteAlpha.800" }}
          >
            <Icon as={HiUser} mr="1" w="4" h="4"></Icon>
            Login
          </Link>
        )}
        {/* Admin Menu */}
        {userInfo && userInfo.isAdmin && (
          <Menu>
            <MenuButton
              ml="5"
              color="white"
              fontSize="sm"
              fontWeight="semibold"
              as={Link}
              textTransform="uppercase"
              _hover={{ textDecoration: "none", opacity: "0.7" }}
            >
              Manage <Icon as={IoChevronDown} />
            </MenuButton>
            <MenuList>
              <MenuItem h="10" as={RouterLink} to="/admin/userlist">
                All Users
              </MenuItem>
              <MenuItem h="10" as={RouterLink} to="/admin/productlist">
                All Products
              </MenuItem>
              <MenuItem h="10" as={RouterLink} to="/admin/orderlist">
                All Orders
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Flex>
  );
};
export default Header;
=======
import {
  Box,
  Flex,
  Heading,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { logout } from "../actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loadingDetails, errorDetails, user } = userDetails;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      p="6"
      backgroundColor="gray.600"
      w="100%"
      top="0"
      pos="fixed"
      zIndex="99"
    >
      <Heading
        as="h1"
        color="whiteAlpha.600"
        fontWeight="bold"
        size="md"
        letterSpacing="md"
      >
        <Link
          as={RouterLink}
          to="/"
          _hover={{ color: "whiteAlpha.800", textDecoration: "none" }}
        >
          ShopNow
        </Link>
      </Heading>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="white" w="5" h="5"></Icon>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: 5, md: 0 }}
        lineHeight={{ base: 2, md: 0 }}
        alignItems="center"
      >
        <Link
          as={RouterLink}
          to="/cart"
          fontSize="sm"
          letterSpacing="wide"
          color="whiteAlpha.600"
          fontWeight="bold"
          textTransform="uppercase"
          mr="5"
          display="flex"
          alignItems="center"
          _hover={{ color: "whiteAlpha.800" }}
        >
          <Icon as={HiShoppingBag} mr="1" w="4" h="4"></Icon>
          cart
        </Link>

        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecor: "none", opacity: "0.7" }}
            >
              {(userInfo.name !== user.name && user.name) || userInfo.name}
            </MenuButton>
            <MenuList>
              <MenuItem h="10" as={RouterLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem h="10" onClick={logoutHandler}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link
            as={RouterLink}
            to="/login"
            fontSize="sm"
            letterSpacing="wide"
            color="whiteAlpha.600"
            fontWeight="bold"
            textTransform="uppercase"
            mr="5"
            display="flex"
            alignItems="center"
            _hover={{ color: "whiteAlpha.800" }}
          >
            <Icon as={HiUser} mr="1" w="4" h="4"></Icon>
            Login
          </Link>
        )}
        {/* Admin Menu */}
        {userInfo && userInfo.isAdmin && (
          <Menu>
            <MenuButton
              ml="5"
              color="white"
              fontSize="sm"
              fontWeight="semibold"
              as={Link}
              textTransform="uppercase"
              _hover={{ textDecoration: "none", opacity: "0.7" }}
            >
              Manage <Icon as={IoChevronDown} />
            </MenuButton>
            <MenuList>
              <MenuItem h="10" as={RouterLink} to="/admin/userlist">
                All Users
              </MenuItem>
              <MenuItem h="10" as={RouterLink} to="/admin/productlist">
                All Products
              </MenuItem>
              <MenuItem h="10" as={RouterLink} to="/admin/orderlist">
                All Orders
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Flex>
  );
};
export default Header;
>>>>>>> 79ab5c26248dac15ae56b579101e0c767f4ba8ee
