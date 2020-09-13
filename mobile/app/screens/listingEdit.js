import React from "react";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CatPickerItem from "../components/catPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(9999).label("Price"),
  description: Yup.string().label("Description"),
  cat: Yup.object().required().nullable().label("Category"),
  images: Yup.array().required().label("Images"),
});

const cats = [
  { bg: "#fc5c65", icon: "floor-lamp", label: "Furniture", value: 1 },
  { bg: "#fd9644", icon: "car", label: "Cars", value: 2 },
  { bg: "#fed330", icon: "camera", label: "Cameras", value: 3 },
  { bg: "#26de81", icon: "cards", label: "Games", value: 4 },
  { bg: "#2bcbba", icon: "shoe-heel", label: "Clothing", value: 5 },
  { bg: "#45aaf2", icon: "basketball", label: "Sports", value: 6 },
  { bg: "#4b7bec", icon: "headphones", label: "Movies & Music", value: 7 },
  { bg: "#a55eea", icon: "book-open-variant", label: "Books", value: 8 },
  { bg: "#778ca3", icon: "application", label: "Other", value: 9 },
];

function ListingEdit() {
  return (
    <AppForm
      initialValues={{
        title: "",
        price: "",
        cat: null,
        description: "",
        images: [],
      }}
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
        PickerComponent={CatPickerItem}
        numOfColumns={3}
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
