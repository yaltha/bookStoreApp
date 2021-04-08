import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BookBestSelling = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      style={styles._book}
      onPress={() => navigation.navigate("BookProfile", { itemId: item.key })}
    >
      <Text style={styles._bookTitle}>{item.title}</Text>
      <Text style={styles._bookAuthor}>{item.author}</Text>
      <View style={styles._container}>
        <Image style={styles._bookImage} source={{ uri: item.uri }} />
        <View style={styles._descriptionContainer}>
          <Text>Description: </Text>
          <Text style={styles._descriptionText}>{item.description}</Text>
          <Text style={styles._priceText}>$ {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookBestSelling;

const styles = StyleSheet.create({
  _book: {
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  _container: {
    flexDirection: "row",
    // alignItems: "center",
  },
  _bookImage: {
    width: 150,
    height: 180,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
  },
  _bookTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#3d3d3d",
    marginTop: 5,
    fontSize: 20,
  },
  _descriptionContainer: {
    justifyContent: "space-between",
  },
  _descriptionText: {
    width: 150,
    lineHeight: 20,
  },
  _priceText: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
});
