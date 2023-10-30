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
  Card,
} from "@chakra-ui/react";

import { AddToCartButton } from "./buttons/AddToCartButton";
import type { ProductCardData } from "./ProductCardData";

interface ProductCardProps {
  data: ProductCardData;
  showAddToCartButton?: boolean;
  showAddToCartIcon?: boolean;
  showBuyButton?: boolean;
  showStarsRating?: boolean;
  maxWidth?: string;
}

export const ProductCard = ({
  data,
  showAddToCartButton,
  showAddToCartIcon,
  showBuyButton,
  showStarsRating,
  maxWidth,
}: ProductCardProps) => {
  return (
    <Card borderWidth="1px" shadow="lg" rounded={{ sm: "lg" }}>
      <Image
        maxWidth={maxWidth}
        src={data.productImage}
        alt={`Picture of ${data.title}`}
        roundedTop="lg"
      />
      <Box p="0">
        {data.isNew && (
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          </Box>
        )}
        <Box>
          <VStack spacing={6}>
            <Heading size="md" fontWeight="extrabold">
              {data.title}
            </Heading>
            <Text size="xs">{data.shortDescription}</Text>
          </VStack>
        </Box>
        <Flex justifyContent="space-around" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color="gray.600" fontSize="lg">
              {data.currency}
            </Box>
            {data.price}
          </Box>
        </Flex>
        {showAddToCartButton && (
          <Flex justifyContent="space-around" alignContent="center">
            <AddToCartButton
              title="Agregar al carrito"
              color="#ffffff"
              bgcolor="var(--chakra-colors-blue-600)"
              url="#"
              isDisable={false}
            />
          </Flex>
        )}
      </Box>
    </Card>
  );
};
