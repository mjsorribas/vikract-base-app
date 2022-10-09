import { Link } from "@chakra-ui/react";

import type LinkContent from "lib/components/customtable/types/linkContent";
import { theme } from "lib/styles/customTheme";

interface Props {
  cell: LinkContent | string;
}

const CellContent = ({ cell }: Props) => {
  if (typeof cell !== "string")
    return (
      <Link color={theme.colors.green} href={cell.link}>
        {cell.value}
      </Link>
    );
  return <span>{cell}</span>;
};

export default CellContent;
