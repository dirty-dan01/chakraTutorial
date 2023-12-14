import { Flex, Box, Heading, Spacer, Text, Button, HStack, VStack } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Testing</Heading>
      <Spacer/>
      <HStack gap="10px">
        <Box bg={"gray.200"} p={10}>My box</Box>
        <Text>Profile</Text>
        <Button colorScheme="linkedin">BUTTLICKER OUR PRICES HAVE NEVER BEEN LOWER</Button>
      </HStack>
    </Flex>
    //  <Flex bg={"gray.200"} justifyContent={"space-around"}>
    //      <Box w = "150px" h = "50px" bg={"red"}>1</Box>
    //      <Box w = "150px" h = "50px" bg={"blue"}>2</Box>
    //      <Box w = "150px" h = "50px" bg={"yellow"}>3</Box>
    //      <Box w = "150px" h = "50px" bg={"green"}>4</Box>
    //  </Flex>
  )
}
