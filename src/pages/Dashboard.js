import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Text,
  Heading,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

function Dashboard() {
  const tasks = useLoaderData();
  document.title = "Dashboard";
  return (
    <SimpleGrid columns="4" minChildWidth="250px" gap="20px" p="10px">
      {tasks.map((task, index) => (
        <Card key={index} bg="white" borderTop="4px solid purple">
          <CardHeader pb="5px">
            <Flex alignItems="center" gap={5}>
              <Avatar src={task.image} />
              <Box>
                <Heading size="sm" mb="5px">
                  {task.title}
                </Heading>
                <Text fontSize="15px" color="gray">
                  by {task.author}
                </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text size="sm">{task.description}</Text>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack spacing={4}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<ViewIcon />}
              >
                Watch
              </Button>
              <Button
                colorScheme="purple"
                color="white"
                leftIcon={<EditIcon />}
              >
                Write
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:8080/tasks");

  return res.json();
};

export default Dashboard;
