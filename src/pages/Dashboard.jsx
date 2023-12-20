import { Text,  Box, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Flex, Heading, HStack, Button, IconButton, Divider, Avatar } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { ViewIcon, EditIcon} from "@chakra-ui/icons";

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

  const tasks = useLoaderData()

  return (
    <Box>
      <Box sx={boxStyle}>
        Welcome to my page
      </Box>
    <SimpleGrid marginTop={"8"} spacing={10} minChildWidth="300px">
        {tasks && tasks.map(task => (
          <Card key={task.id} borderTop={"8px"} borderColor={"purple.400"}>
              <CardHeader>
                <Flex gap={"5"}>
                  <Avatar src={task.img}/>
                  <Box>
                    <Heading as={"h3"} size={"sm"}>{task.title}</Heading>
                    <Text>by {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color={"gray.500"}>
                <Text>{task.description}</Text> 
              </CardBody>
              <Divider color={"gray.200 "}/>
              <CardFooter>
                <HStack>
                  <Button variant={"ghost"} leftIcon={<ViewIcon/>}>Watch</Button>
                  <Button variant={"ghost"} leftIcon={<EditIcon/>}>Comment</Button>
                </HStack>
              </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
    </Box>
  )
}

export const taskLoader = async() => {
  const res = await fetch('http://localhost:3000/tasks')

  return(
    res.json()
  )
}