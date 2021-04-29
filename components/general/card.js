import React, { useContext } from "react";
import { AppContext } from "../../context";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function card(props) {
  const { appState: state } = useContext(AppContext);
  const { onPress = () => {} } = props;

  const style = {
    color: state.foreground,
  };

  return (
    <View
      style={{
        borderWidth: props.borderWidth || 0,
        borderColor: "white",
        borderRadius: 10,
        backgroundColor: state.background,
        marginVertical: 30,
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          borderWidth: 0,
          borderColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            borderWidth: 0,
            borderColor: "white",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/pngs/endel.png")}
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
          <Text style={{ color: state.grey1, fontSize: 12 }}>Endel</Text>
        </View>
        <View>
          <Text style={{ color: state.grey1, fontSize: 12 }}>Now</Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 0,
          borderColor: "white",
          marginVertical: 5,
        }}
      >
        <Text style={{ color: "white" }}>It's Morning Energy Peak</Text>
      </View>

      <View
        style={{
          borderWidth: 0,
          borderColor: "white",
        }}
      >
        <Text style={{ color: state.grey1, fontSize: 12 }}>
          Time to take a deep breath and make it happen.
        </Text>
        <Text style={{ color: state.grey1, fontSize: 12 }}>Try Focus.</Text>
      </View>
    </View>
  );
}

export default card;
