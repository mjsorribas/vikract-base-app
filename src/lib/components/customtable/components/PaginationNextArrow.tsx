import { Button } from "@chakra-ui/react";

import { theme } from "lib/styles/customTheme";

type PaginationNextArrowProps = {
  page: number;
  onPageChange: (page: number) => void;
  colorScheme?: "teal";
  lastPage: number;
};

export function PaginationNextArrow({
  //   isCurrent = false,
  page,
  onPageChange,
  colorScheme,
  lastPage,
}: PaginationNextArrowProps) {
  if (page < lastPage) {
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
        onClick={() => onPageChange(page + 1)}
      >
        {">>"}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg={theme.colors.white}
      color={theme.colors.grey}
      _hover={{
        bg: "white",
        color: "grey",
      }}
    >
      {">>"}
    </Button>
  );
}
