import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import ClinicItems from "./ClinicItems";
import SubHeading from "./SubHeading";

export default function Clinics() {
  const [clinicsList, setClinicsList] = useState([]);
  useEffect(() => {
    getClinics();
  }, []);
  const getClinics = () => {
    GlobalApi.getClinics().then((resp) => {
      //   console.log(resp.data.data);
      const clinicsData = resp.data.data;
      setClinicsList(clinicsData);
      // setClinicsList()
    });
  };
  return (
    clinicsList && (
      <View style={{ marginTop: 10 }}>
        {/* <SubHeading subHeadingTitle={"Clinics"} /> */}
        <SubHeading subHeadingTitle={"Clinics"} />
        <FlatList
          data={clinicsList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <ClinicItems clinic={item} />}
        />
      </View>
    )
  );
}
