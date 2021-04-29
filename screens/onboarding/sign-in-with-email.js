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
import { AntDesign } from "@expo/vector-icons";

function SignInWithEmail(props) {
  const { appState: state } = useContext(AppContext);
  const [email, setEmail] = useState("");

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
        <CloseButton />

        <View
          style={{
            borderColor: "green",
            borderWidth: 0,
            alignSelf: "stretch",
            // alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/pngs/user.png")}
            style={{
              height: 100,
              width: 100,
              alignSelf: "center",
              resizeMode: "contain",
              marginTop: 180,
              marginBottom: 30,
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
            Sign in with email
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Please enter your email to proceed
          </Text>

          <Input
            text="Email"
            fontSize={15}
            value={email}
            onChange={text => setEmail(text)}
            placeholder={"Email"}
          />
        </View>

        <View
          style={{ marginTop: "auto", borderColor: "green", borderWidth: 0 }}
        >
          <Button
            title="Continue"
            borderWidth={1}
            onPress={() => props.navigation.navigate("ConfirmYourEmail")}
            fontSize={15}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignInWithEmail;
