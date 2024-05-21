import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import MedicalRecordCard from "../Components/MedicalRecord/MedicalRecordCard";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";

export default function MedicalRecord() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [medicalRecordList, setMedicalRecordList] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    if (user.fullName) {
      getUserMedicalRecord();
    }
  }, []);

  const getUserMedicalRecord = () => {
    GlobalApi.getUserMedicalRecord(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setMedicalRecordList(resp.data.data);
      }
    );
  };

  const navigateToDetail = (medicalRecord) => {
    navigation.navigate("mr-detail", { medicalRecord });
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader headerTitle={"Medical Record"} backButton={false} />
      <FlatList
        data={medicalRecordList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <MedicalRecordCard medical_records={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
