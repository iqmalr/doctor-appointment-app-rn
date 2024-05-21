import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../assets/Shared/Colors";
import SignInWithOAuth from "../Components/SignInWithOAuth";
const demo = require("../../assets/images/demo.jpg");
export default function Login() {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image source={demo} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.white,
          width: "100%",
          padding: 25,
          alignItems: "center",
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book Appointments Effortlessly and manager your health journey
        </Text>
      </View>
      <SignInWithOAuth />
    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    height: 500,
    // width: 500,
    objectFit: "cover",
    // marginTop: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
