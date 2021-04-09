import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Launching = () => {
  return (
    <View style={styles._container}>
      <View style={styles._logoContainer}>
        <Image
          source={require("../assets/bookStore-logo.png")}
          style={styles._logo}
        />
      </View>
    </View>
  );
};

export default Launching;

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _logoContainer: {
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _logo: {
    width: 100,
    height: 100,
  },
});
