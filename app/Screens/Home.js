import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import { View } from "react-native";
import Categories from "../Components/Home/Categories";
import Clinics from "../Components/Home/Clinics";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";
import Slider from "../Components/Home/Slider";

export default function Home() {
  const { isLoaded, signOut } = useAuth();
  // const VirtualizedScrollView = (props) => {
  return (
    <View style={{ padding: 20 }} horizontal="false">
      {/* <Button
        title="SignOut"
        onPress={() => {
          signOut();
        }}
      ></Button> */}
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      <Slider />
      <Categories />

      <Clinics />
      <Clinics />
    </View>
  );
  // };
}
