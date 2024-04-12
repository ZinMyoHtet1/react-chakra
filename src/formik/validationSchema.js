import * as Yup from "yup";
const validationSchema = Yup.object({
  username: Yup.string().required("username is required"),
  email: Yup.string().email("Not Valid Email").required("Email is required"),
  priority: Yup.boolean().nullable(),
});

export default validationSchema;
