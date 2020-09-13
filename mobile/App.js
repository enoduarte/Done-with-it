import React, { useState } from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";

import ImageInputList from "./app/components/imageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) =>
    setImageUris(imageUris.filter((img) => img !== uri));

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <ImageInputList
          uris={imageUris}
          onAddImg={handleAdd}
          onRemoveImg={handleRemove}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view: {
    flex: 1,
  },
  img: { width: 200, height: 200, backgroundColor: "#999" },
});
