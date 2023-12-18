import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
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
} from '@chakra-ui/react'

export default function Vaccants() {
  return (
    <Box>
      <TableContainer>
          <Table variant='simple' colorScheme='blackAlpha'>
            <Thead>
              <Tr>
                <Th>Nombre de Vacante</Th>
                <Th>Fecha de apertura</Th>
                <Th>Fecha de finalización</Th>
                <Th>Postulaciones</Th>
                <Th>Status</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Desarrollo Web</Td>
                <Td>01.04.2023</Td>
                <Td>01.04.2023</Td>
                <Td isNumeric>10</Td>
                <Td>abierta</Td>
                <Td>
                  <ButtonGroup>
                    <Button>
                      Finalizar
                    </Button>
                    <Button>
                      Detalles
                    </Button>
                  </ButtonGroup>
                </Td>
              </Tr>
              <Tr>
              <Td>Desarrollo Movil</Td>
                <Td>01.04.2023</Td>
                <Td>01.04.2023</Td>
                <Td isNumeric>4</Td>
                <Td>abierta</Td>
                <Td>
                  <ButtonGroup>
                    <Button>
                      Finalizar
                    </Button>
                    <Button>
                      Detalles
                    </Button>
                  </ButtonGroup>
                </Td>
              </Tr>
              <Tr>
              <Td>Desarrollo Web</Td>
                <Td>01.04.2023</Td>
                <Td>01.04.2023</Td>
                <Td isNumeric>10</Td>
                <Td>abierta</Td>
                <Td>
                  <ButtonGroup>
                    <Button>
                      Finalizar
                    </Button>
                    <Button>
                      Detalles
                    </Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
              <Td>Desarrollo Web</Td>
                <Td>01.04.2023</Td>
                <Td>01.04.2023</Td>
                <Td isNumeric>10</Td>
                <Td>abierta</Td>
                <Td>
                  <ButtonGroup>
                    <Button>
                      Finalizar
                    </Button>
                    <Button>
                      Detalles
                    </Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
      </TableContainer>
    </Box>
  )
}
