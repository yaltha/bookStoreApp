import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { v4 as uuidv4 } from "uuid";

import datas from "../datas/books.json";
import Book from "./Book";
import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [books, setBooks] = useState(datas);
  return (
    <View style={styles._container}>
      //?{/* HEADER */}
      <Text>Welcome</Text>
      <Text>to Book Store</Text>
      <TouchableOpacity
        style={styles._iconMyAccount}
        onPress={() => {
          navigation.navigate("Account");
        }}
      >
        {/* icon my account */}
      </TouchableOpacity>
      {/* search bar */}
      <View>
        {/* icon */}
        <TextInput
          style={styles._textInputSearch}
          placeholder="search a book here..."
        />
      </View>
      //?{/*  NEW RELEASE */}
      <View style={styles._newReleaseContainer}>
        <Text>New Release</Text>
        <FlatList
          data={datas}
          renderItem={({ book }) => (
            <Book book={book} navigation={navigation} />
          )}
          keyExtractor={(book) => book.id}
          horizontal={true}
        />
      </View>
      //?{/* BEST SELLING */}
      <View style={styles._newBestSellingContainer}>
        <Text>Best Selling</Text>
        <FlatList
          data={datas}
          renderItem={({ book }) => (
            <Book book={book} navigation={navigation} />
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
