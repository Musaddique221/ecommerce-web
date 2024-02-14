<<<<<<< HEAD
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        MaxW="sm"
        borderRadius="1g"
        backgroundColor="white"
        overflow="hiiden"
        _hover={{ shadow: "md" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          h="430px"
          objectFit="cover"
        ></Image>
        <Flex
          py="5px"
          px="4px"
          direction="column"
          justifyContent="space-between"
        >
          <Heading as="h4" fontSize="xl" mb="3">
            {product.name}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};
export default ProductCard;
=======
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        MaxW="sm"
        borderRadius="1g"
        backgroundColor="white"
        overflow="hiiden"
        _hover={{ shadow: "md" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          h="430px"
          objectFit="cover"
        ></Image>
        <Flex
          py="5px"
          px="4px"
          direction="column"
          justifyContent="space-between"
        >
          <Heading as="h4" fontSize="xl" mb="3">
            {product.name}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};
export default ProductCard;
>>>>>>> 79ab5c26248dac15ae56b579101e0c767f4ba8ee
