import React from "react";
import { Text } from "@chakra-ui/react";

function ErrorText({ errorMsg, ...rest }) {
  return (
    <Text fontSize="md" color="red" {...rest}>
      {errorMsg}
    </Text>
  );
}

export default ErrorText;
