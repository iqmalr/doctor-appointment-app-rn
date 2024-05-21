import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function ClinicDoctorTab({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={[activeIndex === 0 ? styles.activeTab : styles.inActiveTab]}
          onPress={() => {
            setActiveIndex(0);
            activeTab("Clinic");
          }}
        >
          <Text
            style={[
              activeIndex === 0 ? styles.activeText : styles.inactiveText,
            ]}
          >
            Clinic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[activeIndex === 1 ? styles.activeTab : styles.inActiveTab]}
          onPress={() => {
            setActiveIndex(1);
            activeTab("Doctor");
          }}
        >
          <Text
            style={[
              activeIndex === 1 ? styles.activeText : styles.inactiveText,
            ]}
          >
            Doctor
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeText: {
    textAlign: "center",
    fontFamily: "text_regular",
    // fontSize: 18,
    color: Colors.PRIMARY,
  },
  inactiveText: {
    textAlign: "center",
    color: Colors.GRAY,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.PRIMARY,
    padding: 3,
    width: "40%",
  },
  inActiveTab: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
    padding: 3,
    width: "40%",
  },
});
