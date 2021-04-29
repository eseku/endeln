import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const close_button = props => {
  const { onPress = () => {} } = props;
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        borderWidth: 0,
        borderColor: "white",
      }}
      onPress={onPress}
    >
      <AntDesign name="closecircleo" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default close_button;
