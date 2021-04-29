import React from "react";
import { View, Text } from "react-native";
import NavButton from "./nav-button";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const nav_board = () => {
  return (
    <View
      style={{
        borderWidth: 0,
        borderColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        padding: 10,
        marginTop: 10,
      }}
    >
      <NavButton text={false} Comp={SunButton} />
      <NavButton text={false} Comp={WaveButton} />
      <NavButton text={true} title={"F"} />
      {/* <NavButton text={true} title={"G"} /> */}
      <NavButton text={false} Comp={ArrowButton} />
      <NavButton text={true} title={"S"} />
    </View>
  );
};

export default nav_board;

const SunButton = () => <Feather name="sun" size={25} color="white" />;
const WaveButton = () => (
  <MaterialCommunityIcons name="sine-wave" size={25} color="white" />
);
const ArrowButton = () => (
  <AntDesign name="arrowright" size={25} color="white" />
);
