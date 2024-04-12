import React from "react";
import FormikInput from "./formComponents/FormikInput";
import FormikCheckbox from "./formComponents/FormikCheckbox";

function FormikConrol({ control, ...rest }) {
  switch (control) {
    case "input":
      return <FormikInput {...rest} />;
    case "checkbox":
      return <FormikCheckbox {...rest} />;
    default:
      return null;
  }
}

export default FormikConrol;
