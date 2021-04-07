import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Book = ({ navigation, book }) => {
  return (
    <TouchableOpacity
      style={styles._container}
      title="View Book"
      onPress={() => {
        navigation.navigate("BookProfile", book);
      }}
    >
      <Image source={image} style={styles._img} />
      <Text>{book.title}</Text>
    </TouchableOpacity>
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
    justifyContent: "center",
  },
  _img: {
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "white",
  },
});
