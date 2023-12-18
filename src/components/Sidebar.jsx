import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { AlertIcon, List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color={'blackAlpha.600'} fontSize={'1.2em'} spacing={4}>
        <ListItem>
            <NavLink to="/">
                <ListIcon as={CalendarIcon} color={"white"}></ListIcon>
                Dashboard
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/create">
                <ListIcon as={EditIcon} color={"white"}></ListIcon>
                New Task
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/profile">
                <ListIcon   ListIcon as={AtSignIcon} color={"white"}></ListIcon>
                Profile
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/vaccants">
                <ListIcon   ListIcon as={EditIcon} color={"white"}></ListIcon>
                Vaccants
            </NavLink>
        </ListItem>
    </List>
  )
}
