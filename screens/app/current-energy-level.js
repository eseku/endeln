import React, { useContext, useState } from "react";
import { AppContext } from "../../context/index";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Input, Button, CloseButton } from "../../components/general";
import { ScrollView } from "react-native-gesture-handler";

function CurrentEnergyLevel(props) {
  const { appState: state } = useContext(AppContext);
  const [accName, setName] = useState("");

  const styles = {
    container: {
      flex: 1,
      backgroundColor: state.background,
      paddingHorizontal: 50,
    },
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: state.background,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 25,
          borderColor: "green",
          borderWidth: 0,
          position: "relative",
        }}
      >
        <CloseButton onPress={() => props.navigation.goBack()} />

        <View
          style={{
            borderColor: "green",
            // borderWidth: 1,
            alignSelf: "stretch",
            flex: 1,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            Current Energy Level
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Afternoon Energy Recharge
          </Text>
          <Image
            source={require("../../assets/pngs/data-wave.png")}
            style={{
              height: 100,
              width: 350,
              borderWidth: 0,
              borderColor: "white",
              marginVertical: 60,
              resizeMode: "stretch",
            }}
          />
        </View>
        <View
          style={{
            marginTop: "auto",
            borderColor: "white",
            // borderWidth: 1,
            flex: 1,
            justifyContent: "flex-end",
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CurrentEnergyLevel;
