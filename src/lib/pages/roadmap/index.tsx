import { Grid, Heading, List, ListItem, Text } from "@chakra-ui/react";

const Roadmap = () => {
  return (
    <Grid gap={4}>
      <Heading>Our Roadmap</Heading>
      <Text>
        <strong>2023:</strong>
        <List>
          <ListItem>Create base app template</ListItem>
          <ListItem>Design flow to deploy to differents providers</ListItem>
          <ListItem>Design example pages</ListItem>
          <ListItem>Develop custom components</ListItem>
        </List>
      </Text>
      <Text>
        <strong>2024:</strong>
        <List>
          <ListItem>Create library with custom components</ListItem>
          <ListItem>Refactor custom components and move to library</ListItem>
          <ListItem>
            Start a new way to generate templates based on color tokens
          </ListItem>
        </List>
      </Text>
    </Grid>
  );
};

export default Roadmap;
