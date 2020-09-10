import React from "react";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(9999).label("Price"),
  description: Yup.string().label("Description"),
  cat: Yup.object().required().nullable().label("Category"),
});

const cats = [
  { label: "Roupa", value: 1 },
  { label: "Moveis", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEdit() {
  return (
    <AppForm
      initialValues={{ title: "", price: "", cat: null, description: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField maxLength={100} placeholder="Title" name="title" />
      <AppFormField
        maxLength={8}
        keyboardType="numeric"
        placeholder="Price"
        name="price"
        width={150}
      />
      <AppFormPicker
        placeholder="Category"
        name="cat"
        items={cats}
        width={200}
      />
      <AppFormField
        maxLength={255}
        multiline
        numberOfLines={3}
        placeholder="Description"
        name="description"
      />
      <SubmitButton title="Post" />
    </AppForm>
  );
}

export default ListingEdit;
