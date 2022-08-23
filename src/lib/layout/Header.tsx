import { Box, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginLeft="auto" />
    </Flex>
  );
};

export default Header;
