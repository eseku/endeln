import React from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./navigation/";
import { Provider } from "./context";

export default function App() {
  return (
    <>
      <Provider>
        {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}
