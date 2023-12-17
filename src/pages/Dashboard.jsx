import { Text,  Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyle = {
      p: "10px",
      bg: "purple.400", 
      color:"white",
      m: "10px",
      textAlign: "center",
      ':hover' : {
        color: "black",
        bg: "green.300"
      }
  }

  return (
    <Box>
      <Box sx={boxStyle}>
        Welcome to my page
      </Box>
    <SimpleGrid p={10} spacing={10} minChildWidth="250px">
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}>
          <Text color={{base: 'pink', md: 'blue', lg: 'green'}}>Hello</Text>
        </Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>

        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
        <Box bg={"whiteAlpha.600"} h="200px" border={"1px solid"}></Box>
    </SimpleGrid>
    </Box>
  )
}
