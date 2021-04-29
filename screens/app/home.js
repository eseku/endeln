import React, { useContext } from "react";
import { Text, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Pills } from "../../components/general";
import { NavBoard, SubNavBoard } from "../../components/nav-board";
import { AppContext } from "../../context";

const home = props => {
  const { appState: state } = useContext(AppContext);
  const pillItems = [
    "Deep Work",
    "Chill",
    "Self Care",
    "Study",
    "Meditate",
    "Power Nap",
    "Read",
    "Chores",
    "Create",
    "Workout",
    "Yoga",
    "Commute",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView
        style={{ flex: 1, padding: 15 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Afternoon Energy Fade
        </Text>
        <Button
          title={"Tap for details"}
          fontSize={10}
          onPress={() => props.navigation.navigate("CurrentEnergyLevel")}
          style={{
            alignSelf: "center",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        />
        <Image
          source={require("../../assets/pngs/data-wave-vertical.png")}
          style={{
            height: 500,
            width: 100,
            marginVertical: 40,
            resizeMode: "stretch",
            borderWidth: 0,
            borderColor: "white",
          }}
        />
        <Button
          title={"23:56:50"}
          fontSize={10}
          style={{
            alignSelf: "center",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        />
        <NavBoard />
        <SubNavBoard />
        <Pills items={pillItems} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
