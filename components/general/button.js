import React, { useContext } from "react";
import { AppContext } from "../../context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function button(props) {
  const { appState: state } = useContext(AppContext);
  const { onPress = () => {} } = props;

  const style = {
    color: state.foreground,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: props.borderWidth || 0,
        borderColor: "white",
        borderRadius: 15,
        paddingVertical: 15,
        backgroundColor: props.inverted ? "white" : state.grey0,
        marginTop: 10,
        ...props.style,
      }}
    >
      <Text
        style={{
          color: props.inverted ? "black" : "white",
          alignSelf: "center",
          fontSize: props.fontSize || 15,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default button;
