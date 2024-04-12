import React, { createContext } from "react";
import { useFormik } from "formik";
import validationSchema from "../formik/validationSchema";
import { Button, Box } from "@chakra-ui/react";
import FormikConrol from "../formik/FormikConrol";

const initialValues = {
  username: "",
  email: "",
  // priority: "",
};

export const formikContent = createContext();

function Create() {
  const onSubmit = (values) => {
    console.log("Submited", values);
  };
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
        <form onSubmit={formik.handleSubmit}>
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
