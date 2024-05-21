import { useClerk } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";

export default function LogoutButton() {
  const { signOut } = useClerk();
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await signOut();
      //   navigation.navigate("Login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  return <Button title="Logout" onPress={handleLogout} />;
}
