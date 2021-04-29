import React from "react";
import { View, Text } from "react-native";

const cards = () => {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 15,
        height: 100,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>$5.99</Text>
      <Text style={{ marginVertical: 15, color: "white", fontSize: 10 }}>
        1 month
      </Text>
      <Text style={{ color: "white", fontSize: 11 }}>$5.99/mo</Text>
    </View>
  );
};

export default cards;
