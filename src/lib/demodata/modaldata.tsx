const modalData = {
  buttonsConfiguration: {
    accept: {
      title: "Accept",
      // eslint-disable-next-line
      onClick: null,
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
      onClick: null,
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
      onClick: null,
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
