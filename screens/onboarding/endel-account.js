import React, { useContext } from "react";
import { AppContext } from "../../context/index";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "../../components/general";
import { AntDesign } from "@expo/vector-icons";

function EndelAccount(props) {
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
          position: "relative",
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ position: "absolute", top: 20, right: 20 }}
        >
          <AntDesign name="closecircleo" size={24} color="white" />
        </TouchableOpacity>

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
            Endel Account
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            With Endel account, you can enjoy your subscription on{"\n"}multiple
            devices
          </Text>

          <Button title="Sign in with Apple" inverted />
          <Button
            title="Sign in with Facebook"
            borderWidth={1}
            fontSize={15}
            onPress={() => props.navigation.goBack()}
          />
          <Button
            title="Sign in with Email"
            fontSize={15}
            onPress={() => props.navigation.navigate("SignInWithEmail")}
          />
        </View>

        {/* <View
          style={{ marginTop: "auto", borderColor: "green", borderWidth: 0 }}
        >
          <Button
            borderWidth={1}
            title="Later"
            onPress={() => props.navigation.navigate("AllowNotifications")}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
}

export default EndelAccount;
