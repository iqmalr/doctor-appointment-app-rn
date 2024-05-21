import React from "react";
import { Text, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function SubHeading({ subHeadingTitle, seeAll = true }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "text_semibold" }}>
        {subHeadingTitle}
      </Text>
      {seeAll ? (
        <Text style={{ fontFamily: "text_light", color: Colors.PRIMARY }}>
          See All
        </Text>
      ) : null}
    </View>
  );
}
