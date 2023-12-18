import { Box, Button, HStack, List, ListItem, Spacer, Text, Flex } from "@chakra-ui/react";

export default function Create() {
  return (
    <Box>
      <List>
        <ListItem bg={"purple.100"}rounded={"md"}>
          <HStack>
            <Text>Daniel Ceballos</Text>
            <Spacer/>
            <Button colorScheme="purple">Descargar</Button>
          </HStack>
        </ListItem>
        <ListItem bg={"purple.100"}rounded={"md"} marginTop={"1"}>
          <HStack>
            <Text>Kua Arreola</Text>
            <Spacer/>
            <Button colorScheme="purple">Descargar</Button>
          </HStack>
        </ListItem>
        <ListItem bg={"purple.100"}rounded={"md"} marginTop={"1"}>
          <HStack>
            <Text>Hana Fernandez</Text>
            <Spacer/>
            <Button colorScheme="purple">Descargar</Button>
          </HStack>
        </ListItem>
      </List>
    </Box>
  )
}
