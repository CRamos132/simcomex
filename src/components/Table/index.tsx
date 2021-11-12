import { Box } from "@chakra-ui/react";
import { useTable, useSortBy, useExpanded } from "react-table";

interface IProps {
  columns: { Header: string; accessor: any }[];
  data: Record<string, any>[];
}

export default function Table({ columns, data }: IProps) {
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy,
    useExpanded
  );
  return (
    <Box as="table" width="100%">
      <Box as="thead" marginBottom="8px" boxShadow="md">
        {headerGroups.map((headerGroup) => (
          <Box
            as="tr"
            color="primary.500"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <Box
                as="th"
                padding="8px 12px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box height="10px" width="100%" />
      <Box as="tbody" boxShadow="md" {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <Box as="tr" {...row.getRowProps()} key={index}>
              {row.cells.map((cell) => {
                return (
                  <Box
                    as="td"
                    padding="12px 18px"
                    margin="8px"
                    border="2px solid"
                    borderColor="gray.300"
                    color="gray.500"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
