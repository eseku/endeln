import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AppContext } from "../../context/";

const sub_nav_button = props => {
  const { appState: state } = useContext(AppContext);
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
        // padding: 15,
        borderWidth: 0,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        width: 40,
        marginHorizontal: 5,
        backgroundColor: state.grey0,
        ...style,
      }}
    >
      {!!text && (
        <Text
          style={{
            fontSize: 18,
            color: "white",
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

export default sub_nav_button;
