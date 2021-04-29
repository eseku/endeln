import React, { useContext, useState } from "react";
import { AppContext } from "../../context/index";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { Input, Button, CloseButton } from "../../components/general";
import { Cards, CheckList } from "../../components/payment";

function offers(props) {
  const { appState: state, appDispatch } = useContext(AppContext);
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
          borderColor: "yellow",
          borderWidth: 0,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              borderColor: "green",
              borderWidth: 0,
              alignSelf: "stretch",
              flex: 1,
              position: "relative",
              marginBottom: 50,
            }}
          >
            <CloseButton onPress={() => props.navigation.goBack()} />
            <Text
              style={{
                color: state.grey1,
                fontSize: 12,
                fontWeight: "600",
                textAlign: "center",
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Tap for Special Offer
            </Text>

            <Image
              source={require("../../assets/pngs/brain.png")}
              style={{
                height: 150,
                width: 150,
                alignSelf: "center",
                //   borderWidth: 1,
                //   borderColor: "white",
                marginTop: 60,
                marginBottom: 20,
                resizeMode: "contain",
              }}
            />

            <View
              style={{
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  marginBottom: 15,
                }}
              >
                Free Trial Expires in 1 week
              </Text>
              <CheckList
                items={[
                  "Science-backed sound experience",
                  "Unlimited listening time",
                  "Useful real-time insights",
                  "Motivational content weekly",
                  "Available offline",
                  "Cancel anytime",
                ]}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: "auto",
              flex: 1,
              justifyContent: "flex-end",
              borderWidth: 0,
              borderColor: "white",
            }}
          >
            <View
              style={{
                borderWidth: 0,
                color: "green",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Cards />
              <Cards />
              <Cards />
            </View>
            <Button title="Switch User" fontSize={15} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 0.5, marginRight: 4 }}>
                <Button
                  title="Help"
                  onPress={() =>
                    appDispatch({
                      type: "login",
                    })
                  }
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
                textAlign: "center",
                fontSize: 12,
                color: state.grey1,
                marginVertical: 10,
              }}
            >
              The subscription will continue unless canceled in settings at
              least one day before the subscription period ends. You can manage
              your subscription and turn off auto-renewal in your iTunes account
              settings. Payment will be charged to your iTunes Account at
              confirmation of purchase. Any unused portion of a free trial
              period will be forfeited when subscribing to a non-trial plan.
            </Text>
            <Button title={"Privacy Policy"} fontSize={12} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default offers;
