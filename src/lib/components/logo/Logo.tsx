import { Image, Box, Text } from "@chakra-ui/react";

const LOGOSVG = () => {
  return (
    <Box display="flex" alignItems="center">
      <Image
        boxSize="100px"
        objectFit="cover"
        src="/assets/vikract.svg"
        title="Vikract"
      />
      <Text fontSize="sm">VIKRACT</Text>
    </Box>
  );
};
export default function Logo() {
  return <LOGOSVG />;
}
