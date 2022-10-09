import { Link } from "@chakra-ui/react";

import { theme } from "lib/styles/customTheme";
import type LinkTable from "lib/types/linkTable";

interface Props {
  cell: LinkTable | string;
}

const CellTable = ({ cell }: Props) => {
  if (typeof cell !== "string")
    return (
      <Link color={theme.colors.green} href={cell.link}>
        {cell.value}
      </Link>
    );
  return <span>{cell}</span>;
};

export default CellTable;
