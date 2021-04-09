import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function HomeHeader({ navigation, books }) {
  return (
    <View style={styles._container}>
      <View style={styles._textAndAccount}>
        <View>
          <Text style={styles._wecomeText}>Welcome,</Text>
          <Text style={styles._toBookAppText}>to Book Store App,</Text>
        </View>
        <TouchableOpacity
          style={styles._iconAccount}
          onPress={() => navigation.navigate("Account", { books })}
        >
          <Image
            style={styles._avatarAccount}
            source={require("../assets/books_images/bookStore-logo.png")}
          />
        </TouchableOpacity>
      </View>
      <TextInput style={styles._searchInput} placeholder="search a book" />
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    // backgroundColor: "#ccc",
    padding: 10,
  },
  _textAndAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  _wecomeText: {
    fontSize: 36,
    fontFamily: "Montserrat_700Bold",
  },
  _toBookAppText: {
    fontSize: 24,
    fontFamily: "Montserrat_400Regular",
  },
  _iconAccount: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "grey",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _avatarAccount: {
    width: 50,
    height: 50,
  },
  _searchInput: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});
