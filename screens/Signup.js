import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Signup = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Button title="SIGN UP"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
