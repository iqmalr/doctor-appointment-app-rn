import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MedicalRecordCardDetail from "../Components/MedicalRecord/MedicalRecordCardDetail";
import MedicalRecordDetail from "../Components/MedicalRecord/MedicalRecordDetail";
import MedicalRecord from "../Screens/MedicalRecord";

const Stack = createStackNavigator();
export default function MedicalRecordNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MedicalRecord" component={MedicalRecord} />
      <Stack.Screen name="mr-detail" component={MedicalRecordDetail} />
      <Stack.Screen name="mr-card-detail" component={MedicalRecordCardDetail} />
    </Stack.Navigator>
  );
}
