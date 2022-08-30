import type { ButtonProps } from "@chakra-ui/react";
import { Button, Link } from "@chakra-ui/react";

interface ActionButtonProps {
  id?: string;
  title: string;
  href: string;
  buttonBorder?: string;
  buttonVariant?: string;
  buttonColorScheme?: string;
  buttonSize?: string;
  buttonProps?: ButtonProps;
}

const defaultProps: ActionButtonProps = {
  title: "test",
  href: "#",
  buttonBorder: "1px",
  buttonVariant: "outline",
  buttonColorScheme: "blue",
  buttonSize: "lg",
};

export const ActionButton = ({
  id,
  href,
  title,
  buttonBorder,
  buttonVariant,
  buttonSize,
  buttonColorScheme,
  buttonProps,
}: ActionButtonProps & typeof defaultProps) => (
  <Link _hover={undefined} href={href} data-id={id}>
    <Button
      borderWidth={buttonBorder}
      variant={buttonVariant}
      colorScheme={buttonColorScheme}
      size={buttonSize}
      w="full"
      fontWeight="extrabold"
      py={{ md: "8" }}
      {...buttonProps}
    >
      {title}
    </Button>
  </Link>
);
