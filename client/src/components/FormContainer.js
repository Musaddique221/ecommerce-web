<<<<<<< HEAD
import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "xl" }) => {
  return (
    <Flex
      direction="column"
      boxShadow="md"
      rounded="white"
      backgroundColor="white"
      p="10"
      width={width}
    >
      {children}
    </Flex>
  );
};

=======
import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "xl" }) => {
  return (
    <Flex
      direction="column"
      boxShadow="md"
      rounded="white"
      backgroundColor="white"
      p="10"
      width={width}
    >
      {children}
    </Flex>
  );
};

>>>>>>> 79ab5c26248dac15ae56b579101e0c767f4ba8ee
export default FormContainer