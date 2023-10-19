import { Grid, Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

import { ProductCard } from "lib/components/productcard/ProductCard";
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
          {productsdata.map((product, index) => (
            <ProductCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              currency={product.currency}
              isAddtoCartActive={product.isAddtoCartActive}
              isNew={product.isNew}
              productImage={product.productImage}
              productUrl={product.productUrl}
              stars={product.stars}
              starsReviewsCounted={product.starsReviewsCounted}
              stock={product.stock}
              maxWidth="300px"
            />
          ))}
        </SimpleGrid>
      </Box>
    </Grid>
  );
};

export default Products;
