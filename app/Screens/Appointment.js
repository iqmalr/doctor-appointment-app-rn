import { useUser } from "@clerk/clerk-expo";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import AppointmentCardItem from "../Components/Appointment/AppointmentCardItem";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";

export default function Appointment() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [appointmentList, setAppointmentList] = useState();
  useEffect(() => {
    if (user.fullName) {
      getUserAppointments();
    }
  }, []);
  const getUserAppointments = () => {
    GlobalApi.getUserAppointments(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setAppointmentList(resp.data.data);
      }
    );
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader headerTitle={"My Appointment"} backButton={false} />
      <FlatList
        data={appointmentList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <AppointmentCardItem appointment={item} />}
      />
    </View>
  );
}
