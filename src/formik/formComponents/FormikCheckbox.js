import React, { useContext } from "react";
import { Flex, FormLabel } from "@chakra-ui/react";
import { formikContent } from "../../pages/Create";
import { FormControl } from "@chakra-ui/react";

function FormikCheckbox({ label, name, ...rest }) {
  const formik = useContext(formikContent);
  return (
    <FormControl mb="10px">
      <Flex alignItems="center">
        <input
          type="checkbox"
          name={name}
          value="true"
          {...formik.getFieldProps({ name })}
          {...rest}
        />
        <FormLabel ml="10px" mb="0">
          {label}
        </FormLabel>
      </Flex>
    </FormControl>
  );
}

export default FormikCheckbox;
