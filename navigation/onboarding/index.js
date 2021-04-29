import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  createStackNavigator,
  // TransitionPresets,
} from "@react-navigation/stack";
import {
  Pilot,
  AllowNotifications,
  SignIn,
  SignOut,
  EndelAccount,
  SignInWithEmail,
  ConfirmYourEmail,
  NowAccount,
} from "../../screens/onboarding";
import Payment from "../payment";

const { Navigator, Screen } = createStackNavigator();

const index = () => {
  return (
    <Navigator
      screenOptions={{
        // ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        // cardOverlayEnabled: true,
        headerShown: false,
      }}
    >
      <Screen name="Pilot" component={Pilot} />
      <Screen name="AllowNotifications" component={AllowNotifications} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="EndelAccount" component={EndelAccount} />
      <Screen name="SignInWithEmail" component={SignInWithEmail} />
      <Screen name="ConfirmYourEmail" component={ConfirmYourEmail} />
      <Screen name="SignOut" component={SignOut} />
      <Screen name="NowAccount" component={NowAccount} />
      <Screen name="Payment" component={Payment} />
    </Navigator>
  );
};

export default index;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
