import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Divider,
  useColorModeValue,
  GridItem,
} from "@chakra-ui/react";

import Logo from "../../../components/logo/Logo";

import Copyright from "./copyright/Copyright";
import Sitemap from "./sitemap/Sitemap";
import SocialLinks from "./sociallinks/SocialLinks";
import TermsAndConditions from "./termsandconditions/TermsAndConditions";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      alignContent="center"
      w="100%"
    >
      <Container as={Stack} maxW="full" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={10}
          spacing={8}
        >
          <GridItem colSpan={{ sm: 1, md: 2 }}>
            <Logo />
          </GridItem>
          <GridItem colSpan={1}>
            <Sitemap />
          </GridItem>
          <GridItem colSpan={1}>
            <SocialLinks />
          </GridItem>
        </SimpleGrid>
        <Divider orientation="horizontal" />
        <SimpleGrid
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          spacing={2}
        >
          <GridItem colSpan={1}>
            <Copyright />
          </GridItem>
          <GridItem colSpan={1}>
            <TermsAndConditions />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
