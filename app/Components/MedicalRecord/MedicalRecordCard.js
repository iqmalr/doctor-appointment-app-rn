import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { Text, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";
export default function MedicalRecordCard({
  medical_records,
  appointment,
  clinic,
}) {
  const param = useRoute().params;

  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
        backgroundColor: Colors.white,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontFamily: "text_semibold",
          color: Colors.BLACK,
        }}
      >
        {moment(medical_records.attributes.createdAt).format("MMM Do, YYYY")}
      </Text>
      <HorizontalLine />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          color: Colors.BLACK,
        }}
      >
        <View style={{ padding: 10, backgroundColor: Colors.SECONDARY }}>
          <Text>Medical Record Id</Text>
          <HorizontalLine />

          <Text style={{ color: Colors.BLACK, marginTop: 5 }}>
            {medical_records.attributes.MedicalRecordId}
          </Text>
        </View>
        <View style={{ padding: 10, backgroundColor: Colors.SECONDARY }}>
          <Text>Diagnosa</Text>
          <HorizontalLine />

          <Text style={{ color: Colors.BLACK, marginTop: 5 }}>
            {medical_records.attributes.PrimaryDiagnosis}
          </Text>
        </View>
        <View style={{ padding: 10, backgroundColor: Colors.SECONDARY }}>
          <Text>Tindakan</Text>
          <HorizontalLine />

          <Text style={{ color: Colors.BLACK, marginTop: 5 }}>
            {medical_records.attributes.ProcedureName}
          </Text>
        </View>
        <View style={{ padding: 10, backgroundColor: Colors.SECONDARY }}>
          <Text>Kondisi Akhir</Text>
          <HorizontalLine />

          <Text style={{ color: Colors.BLACK, marginTop: 5 }}>
            {medical_records.attributes.DischargeStatus}
          </Text>
        </View>
        <View style={{ padding: 10, backgroundColor: Colors.SECONDARY }}>
          <Text>Tindak Lanjut</Text>
          <HorizontalLine />
          <Text style={{ color: Colors.BLACK, marginTop: 5 }}>
            {medical_records.attributes.FollowUpPlan}
          </Text>
        </View>
      </View>
    </View>
  );
}
