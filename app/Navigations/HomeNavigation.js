import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BookAppointment from "../Screens/BookAppointment";
import ClinicDetails from "../Screens/ClinicDetails";
import ClinicDoctorListScreen from "../Screens/ClinicDoctorListScreen";
import Home from "../Screens/Home";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="clinic-doctor-list-screen"
        component={ClinicDoctorListScreen}
      />
      <Stack.Screen name="clinic-detail" component={ClinicDetails} />
      <Stack.Screen name="book-appointment" component={BookAppointment} />
    </Stack.Navigator>
  );
}
