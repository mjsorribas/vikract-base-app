/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import {
  Badge,
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Image,
} from "@chakra-ui/react";

import { Card } from "lib/components/card/Card";
import type { CardProps } from "lib/components/card/Card";

interface ProductCardProps extends CardProps {
  title: string;
  description?: string;
  price: number;
  currency: string;
  isAddtoCartActive?: boolean;
  isNew?: boolean;
  productImage?: string;
  productUrl?: string;
  stars?: number;
  starsReviewsCounted?: number;
  stock?: number;
}

export const ProductCard = ({
  title,
  description,
  price,
  currency,
  isAddtoCartActive,
  isNew,
  productImage,
  productUrl,
  stars,
  starsReviewsCounted,
  stock,
}: ProductCardProps) => {
  return (
    <Card borderWidth="1px" shadow="lg" rounded={{ sm: "lg" }}>
      <Image src={productUrl} alt={`Picture of ${title}`} roundedTop="lg" />
      <Box p="6">
        {isNew && (
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          </Box>
        )}
        <Box>
          <VStack spacing={6}>
            <Heading size="md" fontWeight="extrabold">
              {title}
            </Heading>
            <Text size="xs">{description}</Text>
          </VStack>
        </Box>
        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color="gray.600" fontSize="lg">
              {currency}
            </Box>
            {price}
          </Box>
        </Flex>
      </Box>
    </Card>
  );
};
