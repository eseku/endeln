import React from "react";
import { View, Text } from "react-native";
import SubNavButton from "./sub-nav-button";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

const nav_board = () => {
  return (
    <View
      style={{
        borderWidth: 0,
        borderColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingHorizontal: 10,
        marginBottom: 10,
      }}
    >
      <SubNavButton text={false} Comp={PlayButton} />
      <SubNavButton text={false} Comp={RadioButton} />
      <SubNavButton text={false} Comp={TimerButton} />
      <SubNavButton text={false} Comp={SunButton} />
      <SubNavButton text={false} Comp={ShareButton} />
      <SubNavButton text={false} Comp={EllipsisButton} />
      {/* 
      <NavButton text={true} title={"F"} />
      {/* <NavButton text={true} title={"G"} /> */}
      {/* <NavButton text={false} Comp={ArrowButton} />
      <NavButton text={true} title={"S"} /> */}
    </View>
  );
};

export default nav_board;

const RadioButton = () => (
  <Ionicons name="md-radio-sharp" size={15} color="white" />
);
const ShareButton = () => (
  <EvilIcons name="share-apple" size={15} color="white" />
);
const SunButton = () => <Feather name="sun" size={15} color="white" />;
const PlayButton = () => (
  <Ionicons name="play-outline" size={15} color="white" />
);
const TimerButton = () => (
  <Ionicons name="ios-timer-outline" size={15} color="white" />
);
const EllipsisButton = () => (
  <Ionicons name="ios-ellipsis-horizontal-outline" size={15} color="white" />
);
