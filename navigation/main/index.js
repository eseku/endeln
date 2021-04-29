import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Home, CurrentEnergyLevel } from "../../screens/app";
const { Navigator, Screen } = createStackNavigator();

function pseudoHomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Main Screen</Text>
    </View>
  );
}

const index = () => {
  return (
    <Navigator
      screenOptions={{
        // ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen
        name="CurrentEnergyLevel"
        component={CurrentEnergyLevel}
        options={{ gestureDirection: "vertical" }}
      />
    </Navigator>
  );
};

export default index;
