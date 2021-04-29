import React from "react";
import { StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Pilot } from "../../screens/onboarding";
import { SpecialOffer, Offers } from "../../screens/payment";

const { Navigator, Screen } = createStackNavigator();

const index = () => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        // cardOverlayEnabled: true,
        // ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Screen name="SpecialOffer" component={SpecialOffer} />
      <Screen
        name="Offers"
        component={Offers}
        options={{ gestureDirection: "vertical" }}
      />
    </Navigator>
  );
};

export default index;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
