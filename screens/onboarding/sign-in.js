import React, { useContext } from "react";
import { AppContext } from "../../context/index";
import { View, Text, SafeAreaView, Image } from "react-native";
import { Button } from "../../components/general";

function SignIn(props) {
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
          borderColor: "green",
          borderWidth: 0,
        }}
      >
        {/* <Text style={{ color: state.foreground }}>pilot1</Text> */}

        <View
          style={{
            borderColor: "green",
            borderWidth: 0,
            alignSelf: "stretch",
            // alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/pngs/devices.png")}
            style={{
              height: 80,
              width: 300,
              alignSelf: "center",
              resizeMode: "contain",
              marginVertical: 60,
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Sign In or Register
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Create an account to use Endel on an unlimited{"\n"}number of
            devices
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 12,
              marginBottom: 15,
            }}
          >
            Mobile . Desktop . Wearable . Voice
          </Text>

          <Text
            style={{
              color: state.grey1,
              textAlign: "center",
              fontSize: 12,
              marginBottom: 15,
            }}
          >
            User ID: 7404 - 2309 - 9294 - 4271
          </Text>

          <Button title="Sign in with Apple" inverted />
          <Button
            title="Other Sign-in Options"
            fontSize={15}
            onPress={() => props.navigation.navigate("EndelAccount")}
          />
        </View>

        <View
          style={{ marginTop: "auto", borderColor: "green", borderWidth: 0 }}
        >
          <Button
            borderWidth={1}
            title="Later"
            onPress={() => props.navigation.navigate("AllowNotifications")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
