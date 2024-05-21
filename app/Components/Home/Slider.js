import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, View } from "react-native";
// import { sliderList } from "../../../assets/data/data";
import GlobalApi from "../../Services/GlobalApi";

export default function Slider() {
  const [sliderList, setSliderList] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSlider();
  }, []);
  const getSlider = () => {
    GlobalApi.getSlider().then((resp) => {
      setSliderList(resp.data.data);
      setLoading(false);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Image.data.attributes.url }}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: 170,
              borderRadius: 10,
              margin: 2,
            }}
          />
        )}
      />
    </View>
  );
}
