import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Book from "./Book";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Book navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
