import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Account = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView style={styles._container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={32} color="#000" />
        </TouchableOpacity>

        <View style={styles._header}>
          <View style={styles._avatar}>
            <Image
              style={styles._avatarAccount}
              source={require("../assets/books_images/bookStore-logo.png")}
            />
          </View>
          <View style={styles._headerTexts}>
            <Text style={styles._nameText}>Jaydon Arcand</Text>
            <Text style={styles._memberText}>Member since 2020</Text>
          </View>
        </View>
        <View style={styles._depositContainer}>
          <Text>Your deposit:</Text>
          <Text style={styles._depositNumber}>$ 535.76</Text>
        </View>
      </SafeAreaView>
      <View style={styles._accountBookContainer}>
        <Text>Books Account</Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  _container: {
    paddingTop: 50,
    marginHorizontal: 20,
  },
  _header: {
    flexDirection: "row",
    paddingVertical: 30,
    alignItems: "center",
  },
  _avatar: {
    marginRight: 15,
  },
  _avatarAccount: {
    width: 50,
    height: 50,
  },
  _headerTexts: {},
  _nameText: {
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
  },
  _memberText: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  _depositNumber: {
    fontSize: 36,
    fontFamily: "Montserrat_700Bold",
    marginVertical: 10,
  },
  _accountBookContainer: {
    // margin: 0,
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#ededed",
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
