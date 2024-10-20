import { Box, Stack, Text } from "@chakra-ui/react";

interface Props {
  fontSize?: string;
  fontColor?: string;
  title?: string;
}

const Copyright = ({
  fontSize = "sm",
  fontColor = "#000000",
  title = "© 2022 Vikract. All rights reserved",
}: Props) => {
  return (
    <Stack align={{ md: "flex-start", sm: "center" }} spacing={6}>
      <Box fontSize={fontSize}>
        <Text color={fontColor}>{title}</Text>
      </Box>
    </Stack>
  );
};

export default Copyright;
