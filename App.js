import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import TabNavigation from "./app/Navigations/TabNavigation";
import Login from "./app/Screens/Login";
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    text_regular: require("./assets/fonts/Poppins-Regular.ttf"),
    text_bold: require("./assets/fonts/Poppins-Bold.ttf"),
    text_semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    text_light: require("./assets/fonts/Poppins-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={"pk_test_YWxpdmUtbWF5Zmx5LTM5LmNsZXJrLmFjY291bnRzLmRldiQ"}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
          {/* <Home /> */}
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
