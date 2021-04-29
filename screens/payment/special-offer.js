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

function SpecialOffer(props) {
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
        <CloseButton onPress={() => alert("pressed")} />

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
            Your Special Offer
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Tap for Other Options
          </Text>
          <Image
            source={require("../../assets/pngs/data-wave.png")}
            style={{
              height: 50,
              width: 350,
              //   borderWidth: 1,
              //   borderColor: "white",
              marginVertical: 60,
              resizeMode: "stretch",
            }}
          />

          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            'App of the Day' in
            {"\n"}138 countries.
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Over 2 million happy users - you{"\n"}are next!
          </Text>
        </View>
        <View
          style={{
            marginTop: "auto",
            borderColor: "white",
            // borderWidth: 1,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flex: 0.5, marginRight: 4 }}>
              <Button
                title="Help"
                // onPress={() => props.navigation.navigate("Payment")}
                fontSize={15}
              />
            </View>
            <View style={{ flex: 0.5, marginLeft: 4 }}>
              <Button
                title="Restore"
                onPress={() => props.navigation.goBack()}
                fontSize={15}
              />
            </View>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Try 1 week free trial. Then $29.99 per 1 year.
          </Text>
          <Button
            title="Continue"
            borderWidth={1}
            onPress={() => props.navigation.navigate("Offers")}
            fontSize={15}
          />
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 12,
              color: state.grey1,
              marginVertical: 10,
            }}
          >
            The subscription will continue unless canceled in settings at least
            one day before the subscription period ends. You can manage your
            subscription and turn off auto-renewal in your iTunes account
            settings. Payment will be charged to your iTunes Account at
            confirmation of purchase. Any unused portion of a free trial period
            will be forfeited when subscribing to a non-trial plan.
          </Text>
          <Button title={"Privacy Policy"} fontSize={12} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SpecialOffer;
