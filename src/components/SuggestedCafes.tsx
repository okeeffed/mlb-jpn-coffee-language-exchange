"use client";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
  Heading,
} from "@chakra-ui/react";

export function SuggestedCafes() {
  return (
    <VStack spacing={8} alignItems="flex-start" mb="12">
      <Heading as="h3">Suggested Cafes</Heading>
      <TableContainer w="full">
        <Table variant="simple">
          <TableCaption>Suggested cafe list</TableCaption>
          <Thead>
            <Tr>
              <Th>Cafe</Th>
              <Th>Location</Th>
              <Th isNumeric>Week</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>CIBI</Td>
              <Td>Collingwood</Td>
              <Td isNumeric>1</Td>
            </Tr>
            <Tr>
              <Td>Higher Ground</Td>
              <Td>CBD</Td>
              <Td isNumeric>2</Td>
            </Tr>
            <Tr>
              <Td>TBC</Td>
              <Td>TBC</Td>
              <Td isNumeric>3</Td>
            </Tr>
            <Tr>
              <Td>TBC</Td>
              <Td>TBC</Td>
              <Td isNumeric>4</Td>
            </Tr>
            <Tr>
              <Td>Krimper Cafe</Td>
              <Td>CBD</Td>
              <Td isNumeric>5</Td>
            </Tr>
            <Tr>
              <Td>Proud Coffee</Td>
              <Td>Prahan</Td>
              <Td isNumeric>6</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  );
}
