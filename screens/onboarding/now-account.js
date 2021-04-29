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

function NowAccount(props) {
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
            source={require("../../assets/pngs/credit-card.png")}
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
            Now You Have an Account
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            It enables Endeln on unlimited number of devices. The
            {"\n"}last step - introduce yourself:
          </Text>

          <Input
            // text="Email"
            fontSize={15}
            value={accName}
            onChange={text => setName(text)}
            placeholder={"Name"}
            color="white"
          />
          <Button
            title="Finish"
            borderWidth={1}
            onPress={() => props.navigation.navigate("Payment")}
            fontSize={15}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NowAccount;
