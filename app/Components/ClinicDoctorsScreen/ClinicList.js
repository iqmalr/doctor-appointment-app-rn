import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import ClinicItemCard from "../Shared/ClinicItemCard";

export default function ClinicList({ clinicList }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={clinicList}
        renderItem={({ item }) => (
          // <Text>{item.attributes.Name}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("clinic-detail", {
                clinic: item,
              })
            }
          >
            <ClinicItemCard clinic={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
