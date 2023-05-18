import { Grid, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";

const Features = () => {
  return (
    <Grid gap={4}>
      <Heading>Dynamic Modal</Heading>
      <Text>
        Vikract core includes custom components to simplified the developer
        life.
        <br />
        <List spacing={3}>
          <ListItem>Carousel</ListItem>
          <ListItem>Contact Form</ListItem>
          <ListItem>Price Card</ListItem>
          <ListItem>Dynamic Tabs</ListItem>
          <ListItem>
            <Link color="teal.500" href="/features/dynamicmodal">
              Dynamic Modal
            </Link>
          </ListItem>
          <ListItem>ActionButton</ListItem>
          <ListItem>Card</ListItem>
        </List>
      </Text>
    </Grid>
  );
};

export default Features;
