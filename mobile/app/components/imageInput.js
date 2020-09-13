import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  View,
  Image,
} from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ uri, onChangeImage }) {
  useEffect(() => {
    reqPermission();
  }, []);

  async function reqPermission() {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) Alert("You need to enable permission to access the library");
  }

  async function handlePress() {
    if (!uri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  }

  async function selectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        quality: 0.5,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image: ", error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {uri ? (
        <Image style={styles.img} source={{ uri }} />
      ) : (
        <View style={styles.img}>
          <Icons size={40} name="camera" color={colors.medium} />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 10,
  },
});

export default ImageInput;
