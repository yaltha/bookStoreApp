import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BookNewRelease = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles._book}
      onPress={() => navigation.navigate("BookProfile", { itemId: item.key })}
    >
      <Image source={{ uri: item.uri }} style={styles._bookImage} />
      <Text style={styles._bookTitle}>{item.title}</Text>
      <Text style={styles._bookAuthor}>{item.author}</Text>
    </TouchableOpacity>
  );
};

export default BookNewRelease;

const styles = StyleSheet.create({
  _book: {
    margin: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _bookImage: {
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  _bookTitle: {
    fontFamily: "Montserrat_700Bold",

    color: "#3d3d3d",
    marginTop: 5,
  },
});