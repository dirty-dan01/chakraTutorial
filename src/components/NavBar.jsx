import { Flex, Box, Heading, Spacer, Text, Button, HStack, VStack, Avatar, AvatarBadge } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { UnlockIcon} from "@chakra-ui/icons";

export default function NavBar() {
  const toast = useToast() 
  const showToast = () => {
    toast({
      title: 'logged out',
      description: 'successful log out',
      duration: 4000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon/>
    })
  }
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Mojo Dojo Casa House</Heading>
      <Spacer/>

      <HStack spacing="20px">
        <Avatar name="Luigi" src="/img/luigi.png">
          <AvatarBadge width={"1.3em"} bg="teal.300" >
            <Text fontSize={"xs"} color={"white"}>3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>Profile</Text>
        <Button colorScheme="purple" onClick={showToast}>Log out</Button>
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
