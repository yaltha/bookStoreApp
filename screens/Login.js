import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Log In</Text>
      <Button title="LOGIN" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
