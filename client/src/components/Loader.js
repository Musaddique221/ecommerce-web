import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.500"
        color="blue.800"
        size="xl"
      ></Spinner>
    </Flex>
  );
};

export default Loader;
