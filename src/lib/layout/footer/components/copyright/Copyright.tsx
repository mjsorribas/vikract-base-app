import { Box, Stack, Text } from "@chakra-ui/react";

interface Props {
  fontSize?: string;
  fontColor?: string;
  title?: string;
}

const defaultProps: Props = {
  fontSize: "sm",
  fontColor: "#000000",
  title: "© 2022 Vikract. All rights reserved",
};

const Copyright = ({
  fontSize,
  fontColor,
  title,
}: Props & typeof defaultProps) => {
  return (
    <Stack align={{ md: "flex-start", sm: "center" }} spacing={6}>
      <Box fontSize={fontSize}>
        <Text color={fontColor}>{title}</Text>
      </Box>
    </Stack>
  );
};

Copyright.defaultProps = defaultProps;

export default Copyright;
