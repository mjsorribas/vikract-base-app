import { Box, Stack, Text } from "@chakra-ui/react";

export default function Copyright() {
  return (
    <Stack align={{ md: "flex-start", sm: "center" }} spacing={6}>
      <Box fontSize="sm">
        <Text>© 2022 Vikract. All rights reserved</Text>
      </Box>
    </Stack>
  );
}
