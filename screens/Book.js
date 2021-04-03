import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import BookProfile from "./BookProfile";

const Book = ({ navigation }) => {
  return (
    <View>
      <Text>Book</Text>
      <Button
        title="View Book"
        onPress={() => {
          navigation.navigate("BookProfile");
        }}
      />
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({});
