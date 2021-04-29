import React, { useContext } from "react";
import { AppContext } from "../../context/index";
import { View, Text, SafeAreaView } from "react-native";
import { Button, Card } from "../../components/general";

function AllowNotifications(props) {
  const { appState: state } = useContext(AppContext);

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
      <View
        style={{
          flex: 1,
          paddingHorizontal: 25,
        }}
      >
        <View style={{ marginTop: "auto", alignSelf: "center" }}>
          <Card borderWidth={1} />
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Get Useful Notifications
          </Text>
          <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
            Endel will send you insights and wellness tips
          </Text>
        </View>

        <View style={{ marginTop: "auto" }}>
          <Button title="Skip" onPress={() => props.navigation.goBack()} />
          <Button
            title="Allow Notifications"
            borderWidth={1}
            onPress={() => props.navigation.navigate("SignIn")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AllowNotifications;
