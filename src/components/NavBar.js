import React from "react";
import {
  Flex,
  Avatar,
  Heading,
  Button,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

function NavBar() {
  const toast = useToast();

  const logoutToast = () =>
    toast({
      title: "Account Logout",
      description: "Successfully logout",
      bg: "purple",
      icon: <UnlockIcon />,
      color: "purple.400",
      duration: 4000,
      position: "top",
      isClosable: true,
    });
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
        <Button colorScheme="purple" onClick={logoutToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default NavBar;
