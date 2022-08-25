import { useMediaQuery, Box, Stack, Button } from "@chakra-ui/react";

const MenuAccess = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  const displayDesktop = () => {
    return (
      <Box>
        <Stack direction="row" spacing={6}>
          <Button
            size={{ sm: "sm", md: "md" }}
            colorScheme="blue"
            variant="solid"
          >
            Sign Up
          </Button>
          <Button
            size={{ sm: "sm", md: "md" }}
            colorScheme="blue"
            variant="outline"
          >
            Sign In
          </Button>
        </Stack>
      </Box>
    );
  };

  const displayMobile = () => {
    return (
      <Box display="flex" flexDirection="column" px="10%">
        <Button mt={5} colorScheme="teal" variant="solid">
          Sign Up
        </Button>
        <Button mt={5} mb={5} colorScheme="teal" variant="outline">
          Sign In
        </Button>
      </Box>
    );
  };

  return <Box>{isMobile ? displayMobile() : displayDesktop()}</Box>;
};

export default MenuAccess;
