import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BookNewRelease = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles._book}
      onPress={() =>
        navigation.navigate("BookProfile", {
          itemId: item.key,
          bookImage: item.uri,
          bookTitle: item.title,
          bookAuthor: item.author,
          bookPages: item.pages,
          bookPrice: item.price,
          bookDescription: item.description,
          isNewRelease: true,
        })
      }
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
    margin: 3,
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
    fontSize: 13,
  },
  _bookAuthor: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
  },
});
