import React, { useState } from "react";
import { Text, View } from "react-native";
import ClinicDoctorTab from "../Components/ClinicDoctorsScreen/ClinicDoctorTab";

export default function Explore() {
  const [clinicList, setClinicList] = useState([]);
  const [activeTab, setActiveTab] = useState("Clinic");
  //   useEffect(() => {
  //     getClinicsByCategory();
  //   }, []);
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "text_semibold",
        }}
      >
        Explore
      </Text>
      <ClinicDoctorTab activeTab={(value) => setActiveTab(value)} />
    </View>
  );
}
