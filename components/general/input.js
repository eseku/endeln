import React, { useContext } from "react";
import { AppContext } from "../../context";
import { View, Text, TextInput } from "react-native";

function input(props) {
  const { appState: state } = useContext(AppContext);
  const { onPress = () => {}, onChange = text => {}, value } = props;

  const style = {
    color: state.foreground,
  };

  return (
    <View
      onPress={onPress}
      style={{
        border: 0,
        borderBottomWidth: 1,
        borderColor: state.grey0,
        paddingVertical: 15,
        marginTop: 8,
        marginBottom: 10,
      }}
    >
      <TextInput
        onChangeText={text => onChange(text)}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={state.grey0}
        style={{
          color: props.color || state.grey0,
          fontSize: props.fontSize || 18,
        }}
      />
    </View>
  );
}

export default input;
