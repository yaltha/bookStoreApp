import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

const BookProfile = ({ navigation, route }) => {
  const {
    itemId,
    bookImage,
    bookTitle,
    bookAuthor,
    bookPages,
    bookPrice,
    bookDescription,
    isBestSelling,
    isNewRelease,
  } = route.params;
  return (
    <SafeAreaView style={styles._container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left-circle" size={32} color="#000" />
      </TouchableOpacity>

      {/* <Text>itemId: {itemId}</Text> */}

      <View>
        <Image source={{ uri: bookImage }} style={styles._bookImage} />
      </View>

      <View style={styles._headerContainer}>
        <Text style={styles._bookTitleText}>{bookTitle}</Text>
        <Text style={styles._bookAuthorText}>{bookAuthor}</Text>

        {isNewRelease ? (
          <View>
            <Text>New Release Book</Text>
          </View>
        ) : isBestSelling ? (
          <View>
            <Text>Best Selling Book</Text>
          </View>
        ) : null}

        <Text style={styles._bookPriceText}> $ {bookPrice}</Text>

        <TouchableOpacity style={styles._buyBtn}>
          <Text>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._addToCartBtn}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <Text>
        Title:
        <Text>{bookTitle}</Text>
      </Text>
      <Text>
        Author:
        <Text>{bookAuthor}</Text>
      </Text>
      <Text>
        Pages:
        <Text>{bookPages}</Text>
      </Text>
      <Text>
        Price: $ <Text>{bookPrice}</Text>
      </Text>
      <Text>
        Description:
        <Text>{bookDescription}</Text>
      </Text>
    </SafeAreaView>
  );
};

export default BookProfile;

const styles = StyleSheet.create({
  _container: {
    paddingTop: 50,
    marginHorizontal: 20,
  },
  _bookImage: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginVertical: 20,
  },
  _headerContainer: {
    // justifyContent: "center",
    alignItems: "center",
  },
  _bookTitleText: {
    fontSize: 24,
    fontFamily: "Montserrat_800ExtraBold",
  },
  _bookAuthorText: {
    fontSize: 12,
    fontFamily: "Montserrat_300Light",
  },
  _bookPriceText: {
    fontSize: 36,
    fontFamily: "Montserrat_800ExtraBold",
  },
  _buyBtn: {
    marginVertical: 20,
    backgroundColor: "#c4c4c4",
    width: 300,
    height: 80,
  },
});
