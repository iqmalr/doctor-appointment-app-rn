import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Colors from "../../assets/Shared/Colors";
import ClinicList from "../Components/ClinicDoctorsScreen/ClinicList";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";

export default function ClinicDoctorListScreen() {
  const [clinicList, setClinicList] = useState([]);
  const param = useRoute().params;

  useEffect(() => {
    getClinicsByCategory();
  }, []);

  const getClinicsByCategory = () => {
    GlobalApi.getClinicsByCategory(param?.categoryName).then((resp) => {
      setClinicList(resp.data.data);
    });
  };

  return (
    <View style={{ padding: 15 }}>
      <PageHeader headerTitle={param?.categoryName} />
      {!clinicList?.length ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.PRIMARY}
          style={{ marginTop: "50%" }}
        />
      ) : (
        <ClinicList clinicList={clinicList} />
      )}
    </View>
  );
}
