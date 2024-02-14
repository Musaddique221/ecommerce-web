import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" py="5">
      <Text >
        copyright {new Date().getFullYear()}. shopNow. All Rights Reserved.
      </Text>
    </Flex>
  );
};
export default Footer;
