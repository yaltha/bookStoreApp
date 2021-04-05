import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Launching = () => {
  return (
    <View style={styles._cont}>
      {/* <Text>Launching</Text> */}
      <Image
        source={require("../assets/bookStore-logo.png")}
        style={styles._logo}
      />
    </View>
  );
};

export default Launching;

const styles = StyleSheet.create({
  _cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _logo: {
    width: 50,
    height: 50,
  },
});
