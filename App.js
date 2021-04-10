import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Account from "./screens/Account";
import Book from "./screens/BookNewRelease";
import BookProfile from "./screens/BookProfile";
import Home from "./screens/Home";
import Launching from "./screens/Launching";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading startAsync={fetchFont} onFinish={() => setDataLoaded(true)} />
  //   );
  // }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
