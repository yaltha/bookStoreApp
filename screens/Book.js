import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import BookProfile from "./BookProfile";

const Book = ({ navigation }) => {
  return (
    <TouchableOpacity
      title="View Book"
      onPress={() => {
        navigation.navigate("BookProfile");
      }}
    >
      <Text>Book</Text>
      <Text>View Book</Text>
    </TouchableOpacity>
  );
};

export default Book;

const styles = StyleSheet.create({});
