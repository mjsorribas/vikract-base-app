import { Grid, Heading, List, ListItem, Text } from "@chakra-ui/react";

const DocumentationForDevs = () => {
  return (
    <Grid gap={4}>
      <Heading>Documentation for Developers</Heading>
      <Text>
        <strong>How's to:</strong>
        <List>
          <ListItem>How define and use Carousel Images</ListItem>
          <ListItem>How define and use Price Table</ListItem>
          <ListItem>How define and use Product Card</ListItem>
          <ListItem>How define a new Logo image</ListItem>
        </List>
      </Text>
    </Grid>
  );
};

export default DocumentationForDevs;
