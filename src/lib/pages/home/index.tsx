import { Grid, ChakraProvider } from "@chakra-ui/react";

import { Carousel } from "lib/components/carousel/Carousel";
import DynamicTabs from "lib/components/dynamictabs/DynamicTabs";
import { carouseldata } from "lib/demodata/carouseldata";
import { tabsdata } from "lib/demodata/tabsdata";

const Home = () => {
  return (
    <Grid gap={4}>
      <ChakraProvider>
        <Carousel heigth="450px" width="100%" data={carouseldata} />
        <br />
        <DynamicTabs
          data={tabsdata}
          size="md"
          variant="enclosed"
          colorScheme="blue"
          bg="white"
          align="start"
          position="relative"
          isFitted={false}
          // eslint-disable-next-line no-console
          onChange={(index) => console.log("Tab changed to index:", index)}
        />
      </ChakraProvider>
    </Grid>
  );
};

export default Home;
