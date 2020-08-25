import React from "react";

import AppTextInput from "../appTextInput";
import { ErrorMessage } from ".";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...rest }) => {
  const { touched, errors, setFieldTouched, handleChange } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...rest}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormField;
