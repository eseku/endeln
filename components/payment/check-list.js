import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const CheckList = props => {
  const { items = [] } = props;
  return (
    <View style={{ borderWidth: 0, borderColor: "white" }}>
      {items.map(item => (
        <View
          key={Math.random()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <FontAwesome5
            name="check"
            size={12}
            color={"#444444"}
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 12, color: "white" }}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default CheckList;
