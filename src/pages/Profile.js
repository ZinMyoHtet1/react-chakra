import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import {
  EmailIcon,
  ChatIcon,
  DeleteIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";

function Profile() {
  document.title = "Profile Page";
  return (
    <Tabs px="20px" variant="enclosed">
      <TabList>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>Account Info</Tab>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              zin@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Contrary to popular belief, Lorem Ipsum
            </ListItem>
            <ListItem>
              <ListIcon as={DeleteIcon} />
              Contrary to popular belief, Lorem Ipsum
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon color="green" as={CheckCircleIcon} />
              zin@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon color="red" as={WarningIcon} />
              Contrary to popular belief, Lorem Ipsum
            </ListItem>
            <ListItem>
              <ListIcon color="red" as={WarningIcon} />
              Contrary to popular belief, Lorem Ipsum
            </ListItem>
            <ListItem>
              <ListIcon color="green" as={CheckCircleIcon} />
              zin@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon color="red" as={WarningIcon} />
              Contrary to popular belief, Lorem Ipsum
            </ListItem>
            <ListItem>
              <ListIcon color="red" as={WarningIcon} />
              Contrary to popular belief, Lorem Ipsum
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Profile;
