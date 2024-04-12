import React, { useContext } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import ErrorText from "./ErrorText";
import { formikContent } from "../../pages/Create";

function FormikInput({ label, name, type }) {
  const formik = useContext(formikContent);
  return (
    <FormControl mb="10px">
      <FormLabel>{label}</FormLabel>
      <Input name={name} type={type} {...formik.getFieldProps({ name })} />
      {formik.touched[`${name}`] && formik.errors[`${name}`] ? (
        <ErrorText errorMsg={formik.errors[`${name}`]} />
      ) : null}
    </FormControl>
  );
}

export default FormikInput;
