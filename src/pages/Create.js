import React, { createContext } from "react";
import { useFormik } from "formik";
import validationSchema from "../formik/validationSchema";
import { Button, Box } from "@chakra-ui/react";
import FormikConrol from "../formik/FormikConrol";

const initialValues = {
  username: "",
  email: "",
  priority: undefined,
};

const onSubmit = (values) => {
  console.log("Submited", values);
};

export const formikContent = createContext();

function Create() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: true,
  });

  console.log("Formik", formik);

  return (
    <formikContent.Provider value={formik}>
      <Box w="400px" p="20px">
        <form onSubmit={onSubmit}>
          <FormikConrol
            control="input"
            label="Username:"
            name="username"
            type="text"
          />
          <FormikConrol
            control="input"
            label="Email:"
            name="email"
            type="email"
          />
          <FormikConrol
            control="checkbox"
            label="make this priority"
            name="priority"
          />
          <Button
            type="submit"
            colorScheme="purple"
            mt="20px"
            isLoading={formik.isSubmitting}
            loadingText="Submitting"
          >
            Submit
          </Button>
        </form>
      </Box>
    </formikContent.Provider>
  );
}

export default Create;
