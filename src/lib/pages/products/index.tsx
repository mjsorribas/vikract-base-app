import { Grid, Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

import { ProductCard } from "lib/components/productcard/ProductCard";
import type { ProductCardData } from "lib/components/productcard/ProductCardData";
import { productsdata } from "lib/demodata/productsdata";

const Products = () => {
  return (
    <Grid gap={4}>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.800")}
        py="14"
        px={{ base: "4", md: "8" }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={{ base: "8", lg: "0" }}
          maxW="7xl"
          mx="auto"
          justifyItems="center"
          alignItems="center"
        >
          {productsdata.map((product: ProductCardData, index) => (
            <ProductCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              data={product}
              maxWidth="300px"
              showBuyButton={false}
              showAddToCartIcon={false}
              showAddToCartButton={false}
              showStarsRating={false}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Grid>
  );
};

export default Products;
