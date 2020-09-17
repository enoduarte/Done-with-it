import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/appButton";

function Welcome({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton onPress={() => navigation.navigate("Login")} title="Login" />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  buttonContainer: { padding: 20, width: "100%" },
  loginBtn: { width: "100%", height: 70, backgroundColor: colors.primary },
  logo: { width: 100, height: 100 },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  registerBtn: { width: "100%", height: 70, backgroundColor: colors.secondary },
  tagline: { marginVertical: 20, fontWeight: "600", fontSize: 25 },
});

export default Welcome;
