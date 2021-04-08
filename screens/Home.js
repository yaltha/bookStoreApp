import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { v4 as uuidv4 } from "uuid";

// import datas from "../datas/books.json";

import Book from "./Book";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [selectedID, setSelectedID] = useState(null);
  const [books, setBooks] = useState([
    {
      id: "book_1",
      image: require("../assets/bookStore-logo.png"),
      title: "Book Title One",
      author: "Author Name Book One",
      pages: 250,
      price: 45.53,
      decription:
        "Tempor ipsum mollit aute cillum non occaecat laboris commodo ex. Nulla commodo aute minim sit ad in nulla exercitation amet voluptate laboris ea. Ut occaecat consequat officia dolor nulla velit reprehenderit magna adipisicing dolor.",
    },
    {
      id: "book_2",
      image: require("../assets/bookStore-logo.png"),
      title: "Book Title Two",
      author: "Author Name Book Two",
      pages: 792,
      price: 66.29,
      decription:
        "Sunt enim ex officia non ut est aute proident consequat dolore amet ex non. Labore tempor occaecat aute fugiat laboris sunt occaecat. Adipisicing elit ex cillum cillum proident. Magna do quis do deserunt cupidatat quis ullamco minim aliqua. Enim aliquip elit fugiat irure sint velit pariatur anim voluptate eiusmod ea cupidatat.",
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("BookProfile", { itemId: item.id });
      }}
    >
      <Book style={styles._book} title={item.title} image={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles._container}>
      <Text>Welcome</Text>
      <Text>to Book Store</Text>

      {/* <View>
        <TextInput
          style={styles._textInputSearch}
          placeholder="search a book here..."
        />
      </View> */}

      <View style={styles._newReleaseContainer}>
        <Text>New Release</Text>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={styles._newRelease}
        />
      </View>

      <View style={styles._newBestSellingContainer}>
        <Text>Best Selling</Text>
        <FlatList
          data={books}
          renderItem={renderItem}
          // renderItem={({ item }) => (
          //   <TouchableOpacity
          //     onPress={() => {
          //       navigation.navigate("BookProfile", { itemId: item.id });
          //     }}
          //   >
          //     <Book title={item.title} image={item.image} />
          //   </TouchableOpacity>
          // )}
          keyExtractor={(item) => item.id}
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
  _book: {
    width: 150,
    height: 180,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 5,
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _newRelease:{
    width: 150,
    height: 180,
  }
});
