import { Container, Grid } from "@chakra-ui/react";

import { Carousel } from "lib/components/carousel/Carousel";

const Home = () => {
  return (
    <Container>
      <Grid gap={4} />
      <Carousel
        data={[
          {
            title: "test 1",
            image:
              "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            order: 1,
          },
          {
            title: "test 2",
            image:
              "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            order: 2,
          },
          {
            title: "test 3",
            image:
              "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            order: 3,
          },
        ]}
      />
    </Container>
  );
};

export default Home;
