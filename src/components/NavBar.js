import React from "react";
import { Flex, Avatar, Heading, Button, Text, HStack } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex
      alignItems="center"
      p="20px"
      justify="space-between"
      position="sticky"
      mb="20px"
    >
      <Heading as="h1">Dojo</Heading>
      <HStack spacing="20px">
        <Avatar
          name="M"
          color="white"
          bg="purple.400"
          src="/imgs/cartoon1.jpg"
          size="sm"
        />
        <Text>zin@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}

export default NavBar;
