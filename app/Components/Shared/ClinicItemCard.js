import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
export default function ClinicItemCard({ clinic }) {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <Image
        source={{ uri: clinic.attributes.image.data.attributes.url }}
        style={{
          width: "100%",
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.white,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontFamily: "text_semibold" }}>
          {clinic.attributes.Name}
        </Text>
        <FlatList
          data={clinic.attributes.categories.data}
          // .slice(0, 1)
          horizontal={true}
          renderItem={({ item }) => (
            <Text style={{ marginRight: 10, color: Colors.GRAY }}>
              {item.attributes.Name}
            </Text>
          )}
        />
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.LIGHT_GRAY,
            margin: 5,
            marginBottom: 10,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-pin" size={20} color={Colors.PRIMARY} />
          <Text>{clinic.attributes.Address}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Fontisto name="bed-patient" size={20} color={Colors.PRIMARY} />
          <Text>100 Pasien</Text>
        </View>
      </View>
    </View>
  );
}
