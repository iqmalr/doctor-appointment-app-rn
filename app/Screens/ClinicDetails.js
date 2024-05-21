import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../assets/Shared/Colors";
import HospitalInfo from "../Components/HospitalDetail/HospitalInfo";
import PageHeader from "../Components/Shared/PageHeader";

export default function ClinicDetails() {
  const [clinic, setClinic] = useState();
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    if (param && param.clinic) {
      setClinic(param.clinic);
    }
  }, [param]);

  return (
    clinic && (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={{ position: "absolute", zIndex: 10, margin: 15 }}>
          <PageHeader />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: clinic.attributes.image.data.attributes.url }}
            style={{ width: "100%", height: 260 }}
          />

          <View
            style={{
              marginTop: -20,
              backgroundColor: Colors.white,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}
          >
            <HospitalInfo clinic={clinic} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("book-appointment", {
              clinic: clinic,
            })
          }
          style={{
            padding: 13,
            backgroundColor: Colors.PRIMARY,
            margin: 10,
            borderRadius: 99,
            marginBottom: 10,
            zIndex: 20,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "text_semibold",
              fontSize: 17,
            }}
          >
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}
