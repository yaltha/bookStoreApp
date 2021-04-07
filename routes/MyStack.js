import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Book from "../screens/Book";
import BookProfile from "../screens/BookProfile";
import Launching from "../screens/Launching";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      // headerMode="none"
      initialRouteName="Home"
      screenOptions={{ headerTitleAlign: "center" }}
      // options={{ headerShown: false }}
      headerMode={"none"}
    >
      <Stack.Screen name="Launching" component={Launching} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen
        name="Book"
        component={Book}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="BookProfile" component={BookProfile} />
    </Stack.Navigator>
  );
};

export default MyStack;
