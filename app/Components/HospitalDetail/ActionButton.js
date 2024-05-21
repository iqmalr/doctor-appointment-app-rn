import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
export default function ActionButton() {
  const actionButtonList = [
    { id: 1, name: "Website", icon: "earth" },
    { id: 2, name: "Email", icon: "chatbubble-ellipses" },
    { id: 3, name: "Phone", icon: "call" },
    { id: 3, name: "Direction", icon: "map" },
    { id: 3, name: "Share", icon: "share" },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={actionButtonList}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        numColumns={5}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: Colors.PRIMARY_FOREGROUND,
                borderRadius: 99,
                padding: 13,
                alignItems: "center",
                width: 55,
              }}
            >
              <Ionicons name={item.icon} size={24} color="black" />
            </View>
            <Text style={{ fontFamily: "text_semibold", marginTop: 5 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
