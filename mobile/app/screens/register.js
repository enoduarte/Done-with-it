import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(50).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(10).label("Password"),
});

function Register({ navigation }) {
  return (
    <>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={() => navigation.navigate("Feed")}
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
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

export default Register;
