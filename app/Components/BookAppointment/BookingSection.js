import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../../assets/Shared/Colors";
import GlobalApi from "../../Services/GlobalApi";
import SubHeading from "../Home/SubHeading";

export default function BookingSection(props) {
  const clinic = props.clinic;
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState();
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading animation
  const { isLoaded, isSignedIn, user } = useUser();
  const navigation = useNavigation();

  useEffect(() => {
    getDays();
    getTime();
  }, []);

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 1; i < 10; i++) {
      const date = moment().add(i, "days");
      if (date.day() !== 0 && date.day() !== 6) {
        // Avoid Saturday (0) and Sunday (6)
        nextSevenDays.push({
          date: date,
          day: date.format("ddd"),
          formatedDate: date.format("Do MMM"),
        });
      }
    }
    setNext7Days(nextSevenDays);
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i < 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i < 5; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  // const bookAppointment = () => {
  //   setLoading(true);
  //   const data = {
  //     data: {
  //       UserName: user.fullName,
  //       Date: selectedDate,
  //       Time: selectedTime,
  //       Email: user.primaryEmailAddress.emailAddress,
  //       clinics: clinic.id,
  //       Note: notes,
  //     },
  //   };
  //   GlobalApi.createAppointment(data).finally(() => {
  //     setLoading(false);
  //   });
  // };
  const bookAppointment = () => {
    setLoading(true); // Mulai animasi loading

    // Mendapatkan tanggal dalam format YYYY-MM-DD
    const formattedDate = moment(selectedDate).format("YYYY-MM-DD");

    // Mengambil jam dalam format HH:MM AM/PM
    const formattedTime = moment(selectedTime, "h:mm A").format("HHmm");

    // Menghasilkan MedicalRecordId dengan menggabungkan inisial nama dengan tanggal dan waktu
    const medicalRecordId = `M${user.fullName.charAt(0)}${formattedDate.replace(
      /-/g,
      ""
    )}${formattedTime}`;

    const appointmentData = {
      data: {
        UserName: user.fullName,
        Date: selectedDate,
        Time: selectedTime,
        Email: user.primaryEmailAddress.emailAddress,
        clinics: clinic.id,
        Note: notes,
      },
    };

    // Buat janji temu
    GlobalApi.createAppointment(appointmentData)
      .then(() => {
        // Jika berhasil membuat janji temu, buat catatan medis
        const medicalRecordData = {
          data: {
            MedicalRecordId: medicalRecordId,
            Name: user.fullName,
            Email: user.primaryEmailAddress.emailAddress,
            DateOfBirth: "-", // Tidak tersedia dari data yang diberikan
            Address: "-", // Tidak tersedia dari data yang diberikan
            AdmissionDiagnosis: "-", // Tidak tersedia dari data yang diberikan
            PhysicalExamination: "-", // Tidak tersedia dari data yang diberikan
            TreatmentHistory: "-", // Tidak tersedia dari data yang diberikan
            PrimaryDiagnosis: "-", // Tidak tersedia dari data yang diberikan
            SecondaryDiagnosis: "-", // Tidak tersedia dari data yang diberikan
            ComplicationDiagnosis: "-", // Tidak tersedia dari data yang diberikan
            ProcedureName: "-", // Tidak tersedia dari data yang diberikan
            AnesthesiaType: "-", // Tidak tersedia dari data yang diberikan
            DischargeCondition: "-", // Tidak tersedia dari data yang diberikan
            DischargeMethod: "-", // Tidak tersedia dari data yang diberikan
            DischargeStatus: "-", // Tidak tersedia dari data yang diberikan
            FollowUpPlan: "-", // Tidak tersedia dari data yang diberikan
            createdAt: "-", // Tidak tersedia dari data yang diberikan
            updatedAt: "-", // Tidak tersedia dari data yang diberikan
          },
        };

        // Buat catatan medis
        return GlobalApi.createMedicalRecord(medicalRecordData);
      })
      .then((medicalRecordResponse) => {
        console.log("Medical record created:", medicalRecordResponse.data);
        // Setelah janji temu dan catatan medis berhasil dibuat, navigasi ke halaman Home
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Error creating medical record:", error);
      })
      .finally(() => {
        setLoading(false); // Berhenti animasi loading
      });
  };

  return (
    <View>
      <Text style={{ fontSize: 18, color: Colors.GRAY }}>BookingSection</Text>
      <SubHeading subHeadingTitle={"Day"} seeAll={false} />
      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedDate(item.date)}
            style={[
              styles.dayButton,
              selectedDate == item.date
                ? { backgroundColor: Colors.PRIMARY }
                : null,
            ]}
          >
            <Text
              style={[
                {
                  fontFamily: "text_regular",
                  fontSize: 10,
                },
                selectedDate == item.date ? { color: Colors.white } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                { fontFamily: "text_semibold", fontSize: 12 },
                selectedDate == item.date ? { color: Colors.white } : null,
              ]}
            >
              {item.formatedDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Time"} seeAll={false} />
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedTime(item.time)}
            style={[
              styles.dayButton,
              {
                paddingVertical: 10,
              },
              selectedTime == item.time
                ? { backgroundColor: Colors.PRIMARY }
                : null,
            ]}
          >
            <Text
              style={[
                { fontFamily: "text_semibold", fontSize: 12 },
                selectedTime == item.time ? { color: Colors.white } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Note"} seeAll={false} />
      <TextInput
        onChangeText={(value) => setNotes(value)}
        style={{
          backgroundColor: Colors.PRIMARY_FOREGROUND,
          padding: 10,
          borderRadius: 10,
          borderColor: Colors.SECONDARY,
          borderWidth: 1,
          textAlignVertical: "top",
        }}
        numberOfLines={3}
        placeholder="Write Notes here"
      />

      <TouchableOpacity
        onPress={() => bookAppointment()}
        style={{
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          margin: 10,
          borderRadius: 99,
          left: 0,
          right: 0,
          marginBottom: 10,
          zIndex: 20,
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "text_semibold",
              fontSize: 17,
            }}
          >
            Make Appointment
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    borderColor: Colors.GRAY,
  },
});
