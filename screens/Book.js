import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Book = ({ title, image, style }) => {
  return (
    <View style={style}>
      <Image source={image} style={styles._img} />
      <Text style={styles._bookTitle}>{title}</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  // _container: {
  //   width: 150,
  //   height: 180,
  //   backgroundColor: "white",
  //   borderRadius: 10,
  //   margin: 10,
  //   padding: 5,
  //   flex: 1,
  //   justifyContent: "center",
  //   // alignItems: "center",

  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  _img: {
    width: 120,
    height: 120,
    // position: "absolute",
    // backgroundColor: "white",
    alignSelf: "center",
  },
  _bookTitle: {
    fontFamily: "Montserrat_600SemiBold",
    paddingHorizontal: 10,
  },
});
