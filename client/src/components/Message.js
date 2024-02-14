<<<<<<< HEAD
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const Message = ({ type = "info", children }) => {
  return (
    <Alert status={type}>
      <AlertIcon />
      <AlertTitle>{children}</AlertTitle>
    </Alert>
  );
};

export default Message;
=======
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const Message = ({ type = "info", children }) => {
  return (
    <Alert status={type}>
      <AlertIcon />
      <AlertTitle>{children}</AlertTitle>
    </Alert>
  );
};

export default Message;
>>>>>>> 79ab5c26248dac15ae56b579101e0c767f4ba8ee
