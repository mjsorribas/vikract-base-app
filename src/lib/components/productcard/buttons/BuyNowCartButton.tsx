import { Button, Text, VStack, Link } from "@chakra-ui/react";

interface BuyNowCartButtonProps {
  title: string;
  bgcolor: string;
  color: string;
  isDisable?: boolean;
  url: string;
}
export const BuyNowCartButton = ({
  title,
  bgcolor,
  color,
  isDisable,
  url,
}: BuyNowCartButtonProps) => {
  return (
    <VStack spacing={6}>
      <Link p="2" href={url} title={title}>
        <Button
          disabled={isDisable}
          p="4"
          shadow="sm"
          rounded={{ md: "md" }}
          color={color}
          backgroundColor={bgcolor}
          title={title}
        >
          <Text size="sm">{title}</Text>
        </Button>
      </Link>
    </VStack>
  );
};
