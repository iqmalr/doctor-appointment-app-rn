import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Appointment from "../Screens/Appointment";
import Profile from "../Screens/Profile";
import HomeNavigation from "./HomeNavigation";
import MedicalRecordNavigation from "./MedicalRecordNavigation";
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home Screen"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={MedicalRecordNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
            // <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
