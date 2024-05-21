import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Animated, TextInput, View } from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();
  const [opacity] = useState(new Animated.Value(0));
  const [position] = useState(new Animated.Value(-50));
  const [isInputActive, setIsInputActive] = useState(false);
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideIn = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const handleFocus = () => {
    setIsInputActive(true);
  };
  const handleBlur = () => {
    setIsInputActive(false);
  };
  fadeIn();
  slideIn();

  return (
    <Animated.View
      style={[
        { marginTop: 20, alignItems: "center" },
        {
          opacity: opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          backgroundColor: isInputActive
            ? Colors.PRIMARY_FOREGROUND
            : Colors.GREY,
          borderColor: isInputActive ? Colors.PRIMARY : Colors.BLACK,
          borderRadius: 10,
          padding: 8,
        }}
      >
        <TextInput
          style={{ flex: 1, paddingLeft: 10, color: "black", width: "100%" }}
          placeholder="Search"
          placeholderTextColor="#888"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
        />
        <FontAwesome
          name="search"
          size={24}
          color={isInputActive ? Colors.PRIMARY : Colors.BLACK}
        />
      </View>
    </Animated.View>
  );
}
