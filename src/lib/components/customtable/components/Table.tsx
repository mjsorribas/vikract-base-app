import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { MdBrokenImage } from "react-icons/md";
import { useTable } from "react-table";
import type { Column } from "react-table";

import { usePagination } from "../hooks/usePagination";
import { theme } from "lib/styles/customTheme";
import type LinkTable from "lib/types/linkTable";

import CellTable from "./CellTable";
import { NoContent } from "./NoContent";
import type { NoContentProps } from "./NoContent";
import { Pagination } from "./Pagination";

type DataType = {
  [key: string]: JSX.Element | string | LinkTable;
};

type EmptyMessage = Partial<NoContentProps>;

interface TableProps {
  columns: Column<DataType>[];
  data: DataType[];
  page: number;
  totalRegisters: number;
  onPageChange: (page: number) => void;
  colorScheme?: "teal";
  emptyData?: EmptyMessage;
}

export function Table({
  page,
  onPageChange,
  totalRegisters,
  data,
  columns,
  colorScheme = "teal",
  emptyData,
}: TableProps) {
  const pagination = usePagination({
    totalRegisters,
    page,
    items: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: pagination.pageItems });

  if (data.length === 0) {
    return (
      <NoContent
        {...emptyData}
        icon={emptyData?.icon ?? MdBrokenImage}
        text={emptyData?.text ?? "Any transaction registered here."}
      >
        {emptyData?.children ?? null}
      </NoContent>
    );
  }

  return (
    <Box w={{ sm: "23em", md: "54em", lg: "82em" }} overflowX="hidden">
      <Box px="0" borderRadius="8" w="full" h="auto" overflowX="hidden">
        <ChakraTable
          {...getTableProps()}
          w={{ sm: "23em", md: "54em", lg: "82em" }}
        >
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <React.Fragment key={column.id}>
                    <Th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </Th>
                  </React.Fragment>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <React.Fragment key={cell.column.id + index}>
                      <Td {...cell.getCellProps()}>
                        <CellTable cell={cell.value} />
                      </Td>
                    </React.Fragment>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </ChakraTable>
      </Box>
      <Box
        width="full"
        w={{ sm: "23em", md: "54em", lg: "82em" }}
        maxW="full"
        pt={0.5}
        backgroundColor={theme.colors.cream}
      >
        <Pagination
          {...pagination}
          colorScheme={colorScheme}
          onPageChange={onPageChange}
        />
      </Box>
    </Box>
  );
}
