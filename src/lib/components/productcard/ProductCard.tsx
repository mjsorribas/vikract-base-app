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

export interface ProductCardData {
  title: string;
  description: string;
  price: number;
  currency: string;
  isAddtoCartActive: boolean;
  isNew: boolean;
  productImage: string;
  productUrl: string;
  stars: number;
  starsReviewsCounted: number;
  stock: number;
}

interface ProductCardProps extends CardProps {
  title: string;
  description: string;
  price: number;
  currency: string;
  isAddtoCartActive: boolean;
  isNew: boolean;
  productImage: string;
  productUrl: string;
  stars: number;
  starsReviewsCounted: number;
  stock: number;
}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Card borderWidth="1px" shadow="lg" rounded={{ sm: "lg" }}>
      <Image
        src={props.productUrl}
        alt={`Picture of ${props.title}`}
        roundedTop="lg"
      />
      <Box p="6">
        {props.isNew && (
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          </Box>
        )}
        <Box>
          <VStack spacing={6}>
            <Heading size="md" fontWeight="extrabold">
              {props.title}
            </Heading>
            <Text size="xs">{props.description}</Text>
          </VStack>
        </Box>
        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color="gray.600" fontSize="lg">
              {props.currency}
            </Box>
            {props.price}
          </Box>
        </Flex>
      </Box>
    </Card>
  );
};
