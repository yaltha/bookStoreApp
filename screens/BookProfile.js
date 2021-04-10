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
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <View style={styles._newReleaseWrapper}>
              <Text style={styles._newReleaseText}>New Release Book</Text>
            </View>
          ) : isBestSelling ? (
            <View style={styles._bestSellingWrapper}>
              <Text style={styles._bestSellingText}>Best Selling Book</Text>
            </View>
          ) : null}

          <Text style={styles._bookPriceText}> $ {bookPrice}</Text>

          <TouchableOpacity style={styles._buyBtn}>
            <Text style={styles._buyBtnText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._addToCartBtn}>
            <Feather name="shopping-cart" size={25} color="#000" />
            <Text style={styles._addToCartBtnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles._tagText}>Title:</Text>
        <Text style={styles._descText}> {bookTitle}</Text>

        <Text style={styles._tagText}>Author:</Text>
        <Text style={styles._descText}> {bookAuthor}</Text>

        <Text style={styles._tagText}>Pages:</Text>
        <Text style={styles._descText}> {bookPages} pages</Text>

        <Text style={styles._tagText}>Price: </Text>
        <Text style={styles._descText}>$ {bookPrice}</Text>

        <Text style={styles._tagText}>Description:</Text>
        <Text style={styles._bookDescText}>{bookDescription}</Text>
      </ScrollView>
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
  _newReleaseWrapper: {
    marginTop: 10,
    width: 300,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  _newReleaseText: {
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "Montserrat_300Light",
  },
  _bestSellingWrapper: {
    marginTop: 10,
    width: 300,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#dedede",
    justifyContent: "center",
  },
  _bestSellingText: {
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "Montserrat_300Light",
  },
  _bookPriceText: {
    marginTop: 20,
    fontSize: 36,
    fontFamily: "Montserrat_800ExtraBold",
  },
  _buyBtn: {
    marginTop: 20,
    backgroundColor: "#c4c4c4",
    width: 300,
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
  },
  _buyBtnText: {
    fontSize: 24,
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    alignSelf: "center",
  },
  _addToCartBtn: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#fff",
    width: 300,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  _addToCartBtnText: {
    paddingLeft: 10,
    fontSize: 24,
    fontFamily: "Montserrat_600SemiBold",
    color: "#6b6b6b",
    textAlign: "center",
  },
  _tagText: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    marginVertical: 5,
  },
  _descText: {
    fontSize: 18,
    fontFamily: "Montserrat_300Light",
    paddingBottom: 10,
  },
  _bookDescText: {
    fontSize: 18,
    fontFamily: "Montserrat_300Light",
    lineHeight: 40,
    paddingBottom: 50,
  },
});
