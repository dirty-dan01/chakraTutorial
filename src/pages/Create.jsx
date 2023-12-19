import { Box, Button, HStack, List, ListItem, Spacer, Text, Flex, FormControl, FormLabel, Input, FormHelperText, Textarea, Checkbox } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW={"480px"}>
      <Form method="post" action="/create">
        <FormControl isRequired mb={"35px"}>
          <FormLabel>Task Name: </FormLabel>
          <Input type="text" name="title" bg={"whiteAlpha.800"} />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl mb={"35px"}>
          <FormLabel>Task Description: </FormLabel>
          <Textarea placeholder="Enter a detailed description" bg={"whiteAlpha.800"} name="description"></Textarea>
        </FormControl>
        <FormControl mb={"35px"} display={"flex"} alignItems="center">
          <Checkbox name="isPriority" size="lg" colorScheme="purple"/>
          <FormLabel mb={"0"} ml={"10px"}>Make this a priority task</FormLabel>
        </FormControl>
        <Button colorScheme="purple" type="submit">Submit</Button>
      </Form>
    </Box>
    // <Box>
    //   <List>
    //     <ListItem bg={"purple.100"}rounded={"md"}>
    //       <HStack>
    //         <Text>Daniel Ceballos</Text>
    //         <Spacer/>
    //         <Button colorScheme="purple">Descargar</Button>
    //       </HStack>
    //     </ListItem>
    //     <ListItem bg={"purple.100"}rounded={"md"} marginTop={"1"}>
    //       <HStack>
    //         <Text>Kua Arreola</Text>
    //         <Spacer/>
    //         <Button colorScheme="purple">Descargar</Button>
    //       </HStack>
    //     </ListItem>
    //     <ListItem bg={"purple.100"}rounded={"md"} marginTop={"1"}>
    //       <HStack>
    //         <Text>Hana Fernandez</Text>
    //         <Spacer/>
    //         <Button colorScheme="purple">Descargar</Button>
    //       </HStack>
    //     </ListItem>
    //   </List>
    // </Box>
  )
}

export const createAction = async ({request}) => {
  const data = await request.formData()
  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }
  console.log(task)
  return redirect('/')
}