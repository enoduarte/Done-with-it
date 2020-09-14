import React, { useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "./imageInput";

function ImageInputList({ uris = [], onRemoveImg, onAddImg }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {uris.map((uri) => (
            <ImageInput
              uri={uri}
              key={uri}
              onChangeImage={() => onRemoveImg(uri)}
            />
          ))}
          <ImageInput onChangeImage={(uri) => onAddImg(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 100, flexDirection: "row" },
});

export default ImageInputList;
