import React from "react";
import AppPicker from "../appPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./errorMessage";

function AppFormPicker({ name, ...rest }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        {...rest}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormPicker;
