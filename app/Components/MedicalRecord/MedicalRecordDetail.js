import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";

export default function MedicalRecordDetail() {
  const [medicalRecord, setMedicalRecord] = useState(null);
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    if (param && param.medicalRecord) {
      setMedicalRecord(param.medicalRecord);
    }
  }, [param]);

  return (
    medicalRecord && (
      <ScrollView style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "text_semibold",
            color: Colors.BLACK,
          }}
        >
          Medical Record Detail
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Medical Record ID:
          </Text>
          <Text>{medicalRecord.attributes.MedicalRecordId}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Name:</Text>
          <Text>{medicalRecord.attributes.Name}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Date of Birth:</Text>
          <Text>{medicalRecord.attributes.DateOfBirth}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Address:</Text>
          <Text>{medicalRecord.attributes.Address}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Admission Diagnosis:
          </Text>
          <Text>{medicalRecord.attributes.AdmissionDiagnosis}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Physical Examination:
          </Text>
          <Text>{medicalRecord.attributes.PhysicalExamination}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Treatment History:
          </Text>
          <Text>{medicalRecord.attributes.TreatmentHistory}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Primary Diagnosis:
          </Text>
          <Text>{medicalRecord.attributes.PrimaryDiagnosis}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Secondary Diagnosis:
          </Text>
          <Text>{medicalRecord.attributes.SecondaryDiagnosis}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Complication Diagnosis:
          </Text>
          <Text>{medicalRecord.attributes.ComplicationDiagnosis}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Procedure Name:</Text>
          <Text>{medicalRecord.attributes.ProcedureName}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Anesthesia Type:</Text>
          <Text>{medicalRecord.attributes.AnesthesiaType}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>
            Discharge Condition:
          </Text>
          <Text>{medicalRecord.attributes.DischargeCondition}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Discharge Method:</Text>
          <Text>{medicalRecord.attributes.DischargeMethod}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Discharge Status:</Text>
          <Text>{medicalRecord.attributes.DischargeStatus}</Text>
          <HorizontalLine />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "text_semibold" }}>Follow-Up Plan:</Text>
          <Text>{medicalRecord.attributes.FollowUpPlan}</Text>
          <HorizontalLine />
        </View>
      </ScrollView>
    )
  );
}
