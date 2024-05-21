import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
export default function PageHeader({ headerTitle, backButton }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
      }}
    >
      {backButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={25} color={Colors.PRIMARY} />
        </TouchableOpacity>
      ) : null}
      <Text
        style={{
          fontSize: 20,
          fontFamily: "text_semibold",
          color: Colors.BLACK,
        }}
      >
        {headerTitle}
      </Text>
    </View>
  );
}
