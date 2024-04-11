import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";

function Sidebar() {
  return (
    <List fontSize="1.2rem" p="20px" color="white" fontWeight="500" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={EditIcon} color="white" />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
}

export default Sidebar;
