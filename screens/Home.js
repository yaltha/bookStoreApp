import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { v4 as uuidv4 } from "uuid";

// import datas from "../datas/books.json";

import Book from "./Book";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const datas = [
  {
    id: "book_1",
    image: require("../assets/bookStore-logo.png"),
    title: "Book Titlw One",
    author: "Author Name Book One",
    pages: 250,
    price: 45.53,
    decription:
      "Tempor ipsum mollit aute cillum non occaecat laboris commodo ex. Nulla commodo aute minim sit ad in nulla exercitation amet voluptate laboris ea. Ut occaecat consequat officia dolor nulla velit reprehenderit magna adipisicing dolor.",
  },
  {
    id: "book_2",
    image: require("../assets/bookStore-logo.png"),
    title: "Book Titlw Two",
    author: "Author Name Book Two",
    pages: 792,
    price: 66.29,
    decription:
      "Sunt enim ex officia non ut est aute proident consequat dolore amet ex non. Labore tempor occaecat aute fugiat laboris sunt occaecat. Adipisicing elit ex cillum cillum proident. Magna do quis do deserunt cupidatat quis ullamco minim aliqua. Enim aliquip elit fugiat irure sint velit pariatur anim voluptate eiusmod ea cupidatat.",
  },
];

const Home = ({ navigation }) => {
  const [books, setBooks] = useState(datas);
  return (
    <View style={styles._container}>
      <Text>Welcome</Text>
      <Text>to Book Store</Text>
      <TouchableOpacity
        style={styles._iconMyAccount}
        onPress={() => {
          navigation.navigate("Account");
        }}
      ></TouchableOpacity>
      <View>
        <TextInput
          style={styles._textInputSearch}
          placeholder="search a book here..."
        />
      </View>
      <View style={styles._newReleaseContainer}>
        <Text>New Release</Text>
        <FlatList
          data={books}
          renderItem={({ book }) => (
            <Book book={book} navigation={navigation} />
          )}
          keyExtractor={(book) => book.id}
          horizontal={true}
        />
      </View>
      <View style={styles._newBestSellingContainer}>
        <Text>Best Selling</Text>
        <FlatList
          data={books}
          renderItem={({ book }) => (
            <Book bookData={book} navigation={navigation} />
          )}
          keyExtractor={(book) => book.id}
          horizontal={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  _container: {
    paddingTop: 50,
  },
});
