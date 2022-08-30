import { Grid, Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";

import { ActionButton } from "lib/components/actionbutton/ActionButton";
import { PriceCard } from "lib/components/pricecard/PriceCard";

const Prices = () => {
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
          <PriceCard
            data={{
              price: "$29",
              name: "Basic UI",
              features: [
                "Basic application UI components",
                "Lifetime access for 6 months",
                "Use on your project",
                "Free Updates for 6 months",
              ],
            }}
            icon={SiMicrosoft}
            button={
              <ActionButton
                title="Buy now"
                href="#"
                buttonSize="lg"
                buttonVariant="outline"
                buttonColorScheme="blue"
              />
            }
          />
          <PriceCard
            zIndex={1}
            isPopular
            transform={{ lg: "scale(1.05)" }}
            data={{
              price: "$49",
              name: "Professional UI",
              features: [
                "Professional application UI",
                "Lifetime access for 1 year",
                "Use on 1 project",
                "Free Updates for 1 year",
              ],
            }}
            icon={SiHive}
            button={
              <ActionButton
                title="Buy now"
                href="#"
                buttonSize="lg"
                buttonVariant="outline"
                buttonColorScheme="blue"
              />
            }
          />
          <PriceCard
            data={{
              price: "$99",
              name: "Enterprise UI",
              features: [
                "Enterprise application UI",
                "Lifetime access for 2 year",
                "Use on 1 project",
                "Free Updates for 2 year",
              ],
            }}
            icon={SiMarketo}
            button={
              <ActionButton
                title="Buy now"
                href="#"
                buttonSize="lg"
                buttonVariant="outline"
                buttonColorScheme="blue"
              />
            }
          />
        </SimpleGrid>
      </Box>
    </Grid>
  );
};

export default Prices;
