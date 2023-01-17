import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { memo } from "react";
import { TouchableOpacity } from "react-native";

const FAB = memo(() => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#2c3e50",
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => navigation.navigate("Faqs")}
    >
      <FontAwesome5 name="question" color={"#fff"} />
    </TouchableOpacity>
  );
});

export default FAB;
