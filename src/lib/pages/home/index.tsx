import { Grid } from "@chakra-ui/react";

import { Carousel } from "lib/components/carousel/Carousel";

const Home = () => {
  return (
    <Grid gap={4}>
      <Carousel
        data={[
          {
            image: "assets/carousel/code-g06a39c171_1920.jpg",
          },
          {
            image: "assets/carousel/coding-gcb58870e4_1920.jpg",
          },
          {
            image: "assets/carousel/software-developer-ga830c698a_1920.jpg",
          },
        ]}
      />
    </Grid>
  );
};

export default Home;
