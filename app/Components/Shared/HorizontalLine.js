import React from "react";
import { View } from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function HorizontalLine() {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        margin: 5,
        marginTop: 15,
      }}
    ></View>
  );
}
