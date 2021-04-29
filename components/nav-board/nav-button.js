import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const nav_button = props => {
  const {
    title = "",
    text,
    Comp = () => {},
    style = {},
    textStyle = {},
  } = props;

  return (
    <TouchableOpacity
      style={{
        padding: 15,
        borderWidth: 1,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 60,
        width: 60,
        ...style,
      }}
    >
      {!!text && (
        <Text
          style={{
            fontSize: 25,
            color: "white",
            fontWeight: "500",
            margin: 0,
            ...textStyle,
          }}
        >
          {title}
        </Text>
      )}

      {!text && <Comp />}
    </TouchableOpacity>
  );
};

export default nav_button;
