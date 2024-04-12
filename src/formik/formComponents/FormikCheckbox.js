import React, { useContext } from "react";
import { Flex, FormLabel } from "@chakra-ui/react";
import { formikContent } from "../../pages/Create";

function FormikCheckbox({ label, name, ...rest }) {
  const formik = useContext(formikContent);
  console.log("Checkbox", typeof formik.values.priority);
  return (
    <Flex alignItems="center" my="20px">
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
  );
}

export default FormikCheckbox;
