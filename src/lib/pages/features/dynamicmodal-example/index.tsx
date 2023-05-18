import { Button, Grid, Heading, Text, Code } from "@chakra-ui/react";
import { useState } from "react";

import DynamicModal from "lib/components/dynamicmodal/DynamicModal";

const DynamicModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleAcceptModal = () => {
    setIsOpen(false);
  };

  const handleCustomModal = () => {
    // Logic for custom button
  };
  const modalData = {
    buttonsConfiguration: {
      accept: {
        title: "Accept",
        // eslint-disable-next-line
        onClick: handleAcceptModal,
        bg: "blue",
        color: "white",
        size: "md",
        colorScheme: "blue",
        order: 2,
        showButton: true,
      },
      cancel: {
        title: "Cancel",
        // eslint-disable-next-line
        onClick: handleCloseModal,
        bg: "gray",
        color: "white",
        size: "md",
        colorScheme: "gray",
        order: 1,
        showButton: true,
      },
      custom: {
        title: "Custom",
        // eslint-disable-next-line
        onClick: handleCustomModal,
        bg: "green",
        color: "white",
        size: "md",
        colorScheme: "green",
        order: 3,
        showButton: false,
      },
    },
    configuration: {
      onClose: "handleClose",
      finalFocusRef: "finalFocusRef",
      isOpen: "isOpen",
      scrollBehavior: "inside",
      size: "md",
      isCentered: false,
      bg: "white",
      color: "black",
    },
    data: {
      title: "Example Modal",
      content: "This is the content of the modal.",
    },
  };

  return (
    <Grid gap={4}>
      <Heading>Simple but Awesome Features</Heading>
      <Text>
        The dynamic modal is a custom component designed to be reused without
        thinking in a lot of things.
        <br />
        Example of how works the Dynamic Modal.
        <br />
        <br />
        <Button onClick={handleOpenModal}>Dynamic Modal</Button>
      </Text>
      <br />
      <Text>Example of configuration code:</Text>
      <Code
        display="block"
        whiteSpace="pre"
        // eslint-disable-next-line react/no-children-prop
        children={`const modalData = {
        buttonsConfiguration: {
          accept: {
            title: "Accept",
            // eslint-disable-next-line
            onClick: handleAcceptModal,
            bg: "blue",
            color: "white",
            size: "md",
            colorScheme: "blue",
            order: 2,
            showButton: true,
          },
          cancel: {
            title: "Cancel",
            // eslint-disable-next-line
            onClick: handleCloseModal,
            bg: "gray",
            color: "white",
            size: "md",
            colorScheme: "gray",
            order: 1,
            showButton: true,
          },
          custom: {
            title: "Custom",
            // eslint-disable-next-line
            onClick: handleCustomModal,
            bg: "green",
            color: "white",
            size: "md",
            colorScheme: "green",
            order: 3,
            showButton: false,
          },
        },
        configuration: {
          onClose: "handleClose",
          finalFocusRef: "finalFocusRef",
          isOpen: "isOpen",
          scrollBehavior: "inside",
          size: "md",
          isCentered: false,
          bg: "white",
          color: "black",
        },
        data: {
          title: "Example Modal",
          content: "This is the content of the modal.",
        },
      };`}
      />
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

export default DynamicModalPage;
