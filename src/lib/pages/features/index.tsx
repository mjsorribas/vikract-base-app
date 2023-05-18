import { Button, Grid, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";

import DynamicModal from "lib/components/dynamicmodal/DynamicModal";
import { modalData } from "lib/demodata/modaldata";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Grid gap={4}>
      <Heading>Simple but Awesome Features</Heading>
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
            <Button onClick={handleOpenModal}>Dynamic Modal</Button>
          </ListItem>
          <ListItem>ActionButton</ListItem>
          <ListItem>Card</ListItem>
        </List>
      </Text>
      <DynamicModal
        data={modalData.data}
        buttonsConfiguration={modalData.buttonsConfiguration}
        configuration={modalData.configuration}
        isOpen={isOpen}
        onClose={handleCloseModal}
      />
    </Grid>
  );
};

export default Features;
