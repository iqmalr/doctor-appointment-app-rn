import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";

export default function AppointmentCardItem({ appointment, clinic }) {
  const [loading, setLoading] = useState(false); // State untuk loading
  const [status, setStatus] = useState(appointment.attributes.Status); // State untuk status appointment

  const cancelAppointment = () => {
    setLoading(true); // Memulai loading
    setStatus("Canceled"); // Mengubah status appointment menjadi "Canceled"
    setLoading(false); // Berhenti loading setelah operasi selesai
  };

  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "text_semibold",
          }}
        >
          {moment(appointment.attributes.Date).format("MMM Do, YYYY")} -{" "}
          {appointment.attributes.Time}
        </Text>
        <Text>{status}</Text>
      </View>
      <HorizontalLine />
      <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <View>
          <Text>{appointment.attributes.clinics.data[0].attributes.Name}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-pin" size={20} color={Colors.PRIMARY} />
          <Text>
            {appointment.attributes.clinics.data[0].attributes.Address}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons
            name="document-text-outline"
            size={20}
            color={Colors.PRIMARY}
          />
          <Text>Appointment Id : {appointment.id}</Text>
        </View>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        {status !== "Canceled" && (
          <TouchableOpacity
            onPress={cancelAppointment}
            style={{
              padding: 5,
              backgroundColor: Colors.PRIMARY,
              margin: 5,
              borderRadius: 99,
              width: 100,
              zIndex: 20,
            }}
          >
            <Text
              style={{
                color: Colors.white,
                textAlign: "center",
                fontFamily: "text_semibold",
                fontSize: 10,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
