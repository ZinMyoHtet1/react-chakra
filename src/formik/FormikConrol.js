import React from "react";
import FormikInput from "./formComponents/FormikInput";

function FormikConrol({ control, ...rest }) {
  switch (control) {
    case "input":
      return <FormikInput {...rest} />;
    default:
      return null;
  }
}

export default FormikConrol;
