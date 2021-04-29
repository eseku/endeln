import React from "react";
import { View, Text } from "react-native";
import Button from "./button";

const pills = props => {
  const { items = [] } = props;
  return (
    <View
      style={{
        borderWidth: 0,
        borderColor: "white",
        alignSelf: "stretch",
        padding: 0,
        paddingHorizontal: 60,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      {items.map(el => (
        <Button
          key={Math.random()}
          title={el}
          fontSize={12}
          style={{
            alignSelf: "center",
            paddingHorizontal: 10,
            paddingVertical: 5,
            margin: 0,
            marginRight: 5,
          }}
        />
      ))}
    </View>
  );
};

export default pills;
