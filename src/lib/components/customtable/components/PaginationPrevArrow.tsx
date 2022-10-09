import { Button } from "@chakra-ui/react";

import { theme } from "lib/styles/customTheme";

type PaginationPrevArrowProps = {
  page: number;
  onPageChange: (page: number) => void;
  colorScheme?: "teal";
};

export function PaginationPrevArrow({
  //   isCurrent = false,
  page,
  onPageChange,
  colorScheme,
}: PaginationPrevArrowProps) {
  if (page > 1) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg={theme.components.PaginationItem.button.backgroundColor}
        color={colorScheme}
        _hover={{
          bg: "white",
          color: "black",
        }}
        onClick={() => onPageChange(page - 1)}
      >
        {"<<"}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg={theme.components.PaginationItem.button.backgroundColor}
      color={theme.colors.grey}
      _hover={{
        bg: "white",
        color: "grey",
      }}
    >
      {"<<"}
    </Button>
  );
}
