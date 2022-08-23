import { Box, Stack, Link } from "@chakra-ui/react";

export default function TermsAndConditions() {
  return (
    <Stack align={{ md: "flex-end", sm: "center" }} spacing={6}>
      <Box fontSize="sm">
        <Link href="https://vikract.com/terms" ml={3}>
          Terms
        </Link>
        <Link href="https://vikract.com/conditions" ml={3}>
          Conditions
        </Link>
        <Link href="https://vikract.com/cookies" ml={3}>
          Cookies
        </Link>
      </Box>
    </Stack>
  );
}
