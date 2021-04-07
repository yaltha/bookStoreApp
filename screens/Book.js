import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Book = ({ title }) => {
  return (
    <View style={styles._container}>
      <Image style={styles._img} />
      <Text style={styles._bookTitle}>{title}</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  _container: {
    width: 150,
    height: 180,
    backgroundColor: "grey",
    borderRadius: 10,
    margin: 10,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  _img: {
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "white",
    alignSelf: "baseline",
  },
  _bookTitle: {},
});
