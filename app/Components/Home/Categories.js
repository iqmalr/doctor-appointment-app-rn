import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";
import GlobalApi from "../../Services/GlobalApi";
import SubHeading from "./SubHeading";

export default function Categories() {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalApi.getCategories().then((resp) => {
      // console.log(resp.data.data);
      const categoriesData = resp.data.data;
      setCategoryList(categoriesData);
    });
  };

  if (!categoryList) {
    return null;
  }

  return (
    <View style={{ marginTop: 10 }}>
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > */}
      {/* <Text style={{ fontSize: 20, fontFamily: "text_semibold" }}>
          Categories
        </Text> */}
      <SubHeading subHeadingTitle={"Categories"} />
      {/* <Text style={{ fontFamily: "text_light", color: Colors.PRIMARY }}>
          See All
        </Text> */}
      {/* </View> */}
      <FlatList
        data={categoryList}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        numColumns={4}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) =>
          index < 4 && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("clinic-doctor-list-screen", {
                  categoryName: item.attributes.Name,
                })
              }
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: Colors.PRIMARY_FOREGROUND,
                  padding: 5,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{
                    uri: item.attributes.Icon.data[0].attributes.url,
                  }}
                  style={{ width: 25, height: 25 }}
                />
              </View>
              <Text>{item.attributes.Name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}
