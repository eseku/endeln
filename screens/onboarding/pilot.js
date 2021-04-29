import React, { useContext } from "react";
import { AppContext } from "../../context/index";
import { View, Text, SafeAreaView, Image } from "react-native";
import { Button } from "../../components/general";
import festive from "../../assets/pngs/festive.png";

function pilot(props) {
  const { appState: state } = useContext(AppContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: state.background,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 25,
        }}
      >
        <View style={{ borderWidth: 0, borderColor: "white", paddingTop: 100 }}>
          <Image
            source={require("../../assets/pngs/fireworks.png")}
            style={{
              height: 200,
              width: 250,
              alignSelf: "center",
              resizeMode: "contain",
              marginTop: 40,
              marginBottom: 30,
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Make the Most of Your Day
          </Text>
          <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
            With the sound that adapts to the circadian rhythm
          </Text>
        </View>

        <View style={{ marginTop: "auto" }}>
          <Button
            borderWidth={1}
            title="Continue"
            onPress={() => props.navigation.navigate("AllowNotifications")}
            // onPress={() => props.navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default pilot;
