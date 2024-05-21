import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "../Home/SubHeading";
import ActionButton from "./ActionButton";

export default function HospitalInfo({ clinic }) {
  return (
    clinic && (
      <View>
        <View>
          <Text style={{ fontSize: 24, fontFamily: "text_semibold" }}>
            {clinic.attributes.Name}
          </Text>

          {clinic.attributes.categories.data.map((item, index) => (
            <Text key={index} style={{ marginRight: 10, color: Colors.GRAY }}>
              {item.attributes.Name}
            </Text>
          ))}

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
            <MaterialIcons name="location-pin" size={20} color={Colors.GRAY} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "text_semibold",
                color: Colors.GRAY,
              }}
            >
              {clinic.attributes.Address}
            </Text>
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
            <Text
              style={{
                fontSize: 16,
                color: Colors.GRAY,
                marginBottom: 15,
                marginTop: 10,
              }}
            >
              Mon Sun | 11AM - 8 PM
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: Colors.LIGHT_GRAY,
              margin: 5,
              marginBottom: 10,
            }}
          ></View>

          <ActionButton />

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: Colors.LIGHT_GRAY,
              margin: 5,
              marginTop: 15,
            }}
          ></View>

          <SubHeading subHeadingTitle={"About"} />
          <Text>{clinic.attributes.Description}</Text>
        </View>
      </View>
    )
  );
}
