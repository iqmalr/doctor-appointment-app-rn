import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AppointmentHospitalInfo from "../Components/BookAppointment/AppointmentHospitalInfo";
import BookingSection from "../Components/BookAppointment/BookingSection";
import ActionButton from "../Components/HospitalDetail/ActionButton";
import HorizontalLine from "../Components/Shared/HorizontalLine";

export default function BookAppointment() {
  //   const [clinic, setClinic] = useState();
  // const param = useRoute().params;
  const param = useRoute().params;
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    if (param && param.clinic) {
      setClinic(param.clinic);
    }
  }, [param]);
  return (
    <ScrollView style={{ padding: 20 }}>
      {/* <AppointmentHospitalInfo clinic={param.clinic} />
      <ActionButton />
      <HorizontalLine />
      <BookingSection clinic={{ id: param.clinic.id, ...param.clinic }} /> */}
      {clinic && (
        <>
          <AppointmentHospitalInfo clinic={clinic} />
          <ActionButton />
          <HorizontalLine />
          <BookingSection clinic={clinic} />
        </>
      )}
    </ScrollView>
  );
}
