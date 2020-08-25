import React from "react";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(50).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(10).label("Password"),
});

function Register() {
  return (
    <AppForm
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        autoCorrect={false}
        icon="account"
        placeholder="Name"
        name="name"
      />
      <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        autoCompleteType="email"
        icon="email"
        placeholder="Email"
        name="email"
      />
      <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        icon="lock"
        placeholder="Password"
        name="password"
      />
      <SubmitButton title="Register" />
    </AppForm>
  );
}

export default Register;
