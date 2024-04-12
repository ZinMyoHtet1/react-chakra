import React, { useEffect } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";
import { tasksLoader } from "../redux/DashBoard/dashBoardActions";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  document.title = "Dashboard Page";
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    tasksLoader(dispatch, "http://localhost:8080/tasks");
  }, [dispatch]);

  console.log(state.loading);
  if (state.loading) {
    return (
      <Flex justify="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  if (state.error) {
    return <div>{state.error}</div>;
  }
  return (
    <SimpleGrid columns="4" minChildWidth="250px" gap="20px" p="10px">
      {state.tasks.map((task, index) => (
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

export default Dashboard;
