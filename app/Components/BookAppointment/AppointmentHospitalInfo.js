import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";
import PageHeader from "../Shared/PageHeader";

export default function AppointmentHospitalInfo() {
  const [clinic, setClinic] = useState();
  const param = useRoute().params;
  const navigation = useNavigation();
  useEffect(() => {
    if (param && param.clinic) {
      setClinic(param.clinic);
    }
  }, [param]);
  // const param = useRoute().params;
  return (
    clinic && (
      <View>
        <PageHeader title={"Book Appointment"} />
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Image
            source={{ uri: clinic.attributes.image.data.attributes.url }}
            style={{ width: 100, height: 100, borderRadius: 99 }}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "text_semibold",
                marginBottom: 8,
              }}
            >
              {clinic.attributes.Name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="location-pin"
                size={20}
                color={Colors.PRIMARY}
              />
              <Text style={{ fontSize: 16, fontFamily: "text_regular" }}>
                {clinic.attributes.Address}
              </Text>
            </View>
          </View>
        </View>
        <HorizontalLine />
      </View>
    )
  );
}
