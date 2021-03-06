import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Account from "./screens/Account";
import Book from "./screens/Book";
import BookProfile from "./screens/BookProfile";
import Launching from "./screens/Launching";

const Stack = createStackNavigator();

// const fetchFont = () => {
//   return Font.loadAsync({
//     "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
//     "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
//     "montserrat-extra-bold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
//     "montserrat-extra-light": require("./assets/fonts/Montserrat-ExtraLight.ttf"),
//     "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
//     "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
//     "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
//     "montserrat-semi-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
//     "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf"),
//   });
// };

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
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
        initialRouteName="Signup"
        screenOptions={{ headerTitleAlign: "center" }}
        // options={{ headerShown: false }}
        headerMode={"none"}
      >
        <Stack.Screen name="Launching" component={Launching} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Book" component={Book} options={{headerShown=true}} />
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
