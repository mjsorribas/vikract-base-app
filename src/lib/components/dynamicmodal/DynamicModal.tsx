import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import type React from "react";

interface DynamicModalProps {
  data: {
    title: string;
    content: string;
  };
  buttonsConfiguration?: {
    [key: string]: {
      title: string;
      onClick: () => void;
      bg: string;
      color: string;
      size: string;
      colorScheme: string;
      order: number;
      showButton?: boolean;
    };
  };
  configuration?: {
    onClose: string;
    finalFocusRef: string;
    isOpen: string;
    scrollBehavior: string;
    size: string;
    isCentered: boolean;
    bg: string;
    color: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const DynamicModal: React.FC<DynamicModalProps> = ({
  data,
  buttonsConfiguration = {},
  configuration = {},
  isOpen,
  onClose,
}) => {
  const renderButtons = () => {
    const buttons = Object.values(buttonsConfiguration)
      .filter((button) => button.showButton)
      .sort((a, b) => a.order - b.order);

    return buttons.map((button) => (
      <Button
        key={button.title}
        colorScheme={button.colorScheme}
        bg={button.bg}
        color={button.color}
        size={button.size}
        // eslint-disable-next-line
        onClick={button.onClick}
      >
        {button.title}
      </Button>
    ));
  };

  const { title, content } = data;
  const {
    onClose: onCloseKey,
    finalFocusRef,
    isOpen: isOpenKey,
    scrollBehavior,
    size,
    isCentered,
    bg,
    color,
  } = configuration;

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={scrollBehavior}
      finalFocusRef={finalFocusRef}
      size={size}
      isCentered={isCentered}
    >
      <ModalOverlay bg={bg} />
      <ModalContent color={color}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{content}</ModalBody>
        <ModalFooter>{renderButtons()}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DynamicModal;
