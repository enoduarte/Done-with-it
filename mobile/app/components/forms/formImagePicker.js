import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./errorMessage";
import ImageInputList from "../imageInputList";

function FormImagePicker({ name }) {
  const { touched, errors, setFieldValue, values } = useFormikContext();

  const handleAdd = (uri) => setFieldValue(name, [...values[name], uri]);

  const handleRemove = (uri) =>
    setFieldValue(
      name,
      values[name].filter((img) => img !== uri)
    );

  return (
    <>
      <ImageInputList
        uris={values[name]}
        onAddImg={handleAdd}
        onRemoveImg={handleRemove}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormImagePicker;
