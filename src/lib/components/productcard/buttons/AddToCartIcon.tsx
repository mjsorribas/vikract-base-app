import { Button, Text, VStack, Link, Icon } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

interface AddToCartIconProps {
  title: string;
  bgcolor: string;
  color: string;
  isDisable?: boolean;
  url: string;
}
export const AddToCartIcon = ({
  title,
  bgcolor,
  color,
  isDisable,
  url,
}: AddToCartIconProps) => {
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
          <Icon
            as={FaCartPlus}
            w={6}
            h={6}
            backgroundColor={bgcolor}
            color={color}
          />
        </Button>
      </Link>
    </VStack>
  );
};
