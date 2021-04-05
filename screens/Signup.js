import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Signup = ({ navigation }) => {
  return (
    <View style={styles._container}>
      <Image
        source={require("../assets/bookStore-logo.png")}
        style={styles._img}
      />
      <Text style={styles._titleText}>Sign Up</Text>
      <TextInput
        style={styles._textInput}
        placeholder="insert your email..."
        keyboardType="email-address"
      />
      <TextInput
        style={styles._textInput}
        placeholder="insert your password..."
        keyboardType="visible-password"
      />
      <TouchableOpacity
        style={styles._btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles._btnText}>sign in</Text>
      </TouchableOpacity>
      <Text
        style={styles._textToLogin}
        onPress={() => navigation.navigate("Login")}
      >
        Already have an account?
      </Text>
      <Text style={styles._textLoginWith}>Sign up with:</Text>
      <View style={styles._loginWithContainer}>
        <View style={styles._containerIcon}>
          <FontAwesome name="github" size={32} color="lightgrey" />
        </View>
        <View style={styles._containerIcon}>
          <FontAwesome name="envelope" size={32} color="lightgrey" />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _img: {
    marginTop: 50,
    width: 100,
    height: 100,
    backgroundColor: "gray",
    borderRadius: 100,
  },
  _titleText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 48,
    color: "gray",
    paddingVertical: 30,
  },
  _textInput: {
    width: 300,
    padding: 20,
    marginVertical: 10,
    borderColor: "gray",
    // color: "gray",
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: "Montserrat_400Regular",
  },
  _btn: {
    width: 300,
    padding: 20,
    alignItems: "center",
    backgroundColor: "gray",
    marginVertical: 20,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _btnText: {
    fontSize: 24,
    fontFamily: "Montserrat_600SemiBold",
    color: "#EDEDED",
  },
  _textToLogin: {
    marginTop: 10,
    fontFamily: "Montserrat_500Medium",
  },
  _textLoginWith: {
    marginTop: 10,
    fontFamily: "Montserrat_500Medium",
  },
  _loginWithContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  _containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: "grey",
    borderRadius: 10,
  },
});
