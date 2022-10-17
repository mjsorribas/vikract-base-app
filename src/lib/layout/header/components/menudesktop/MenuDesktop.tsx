import { Box, Flex, Spacer, Link, Stack } from "@chakra-ui/react";

import MenuAccess from "../menuaccess/menuAccess";
import Logo from "lib/components/logo/Logo";
import { theme } from "lib/styles/customTheme";

export default function MenuDesktop() {
  return (
    <Flex>
      <Logo boxSize="25px" fontSize="1.168rem" fontColor={theme.colors.black} />
      <Spacer />
      <Box display="flex" alignItems="center">
        <Stack direction="row" spacing={8}>
          <Link
            fontWeight="bold"
            fontSize={{ sm: "0.875rem", md: "1.168rem" }}
            ml={5}
            _hover={{ textDecoration: "none" }}
            href="/"
          >
            Home
          </Link>
          <Link
            ml={5}
            fontSize={{ sm: "0.875rem", md: "1.168rem" }}
            _hover={{ textDecoration: "none" }}
            href="/aboutus"
          >
            About Us
          </Link>
          <Link
            ml={5}
            fontSize={{ sm: "0.875rem", md: "1.168rem" }}
            _hover={{ textDecoration: "none" }}
            href="/prices"
          >
            Prices
          </Link>
          <Link
            ml={5}
            fontSize={{ sm: "0.875rem", md: "1.168rem" }}
            _hover={{ textDecoration: "none" }}
            href="/contactus"
          >
            Contact Us
          </Link>
        </Stack>
      </Box>
      <Spacer />
      <MenuAccess />
    </Flex>
  );
}
