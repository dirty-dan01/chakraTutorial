import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon} from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs margin={"40px"} p={"20px"} colorScheme="purple" variant={"enclosed" }>
      <TabList>
        <Tab _selected={{color: "white", bg: "purple.400"}}>Account info</Tab>
        <Tab _selected={{color: "white", bg: "purple.400"}}>History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
                <ListIcon as={EmailIcon} />                
                Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit neque voluptate optio dolor iste nesciunt dolorem rem quis, exercitationem qui facere amet eius sed praesentium recusandae sequi, numquam aliquid.        
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
                Lorem ipsum dolor sit amet              
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
        <List spacing={4}>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="teal.400" />                
                Lorem ipsum dolor sit amet 
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
                Lorem ipsum dolor sit amet              
            </ListItem> 
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="teal.400" />                
                Lorem ipsum dolor sit amet 
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
                Lorem ipsum dolor sit amet              
            </ListItem> 
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
