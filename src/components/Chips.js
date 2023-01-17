import { Feather } from "@expo/vector-icons";
import React, { memo } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Chips = memo(({ color = "#2c3e50", text, icon = "box", onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginEnd: 10,
        backgroundColor: color + 20,
      }}
      disabled={!onPress}
      onPress={onPress}
    >
      <Feather
        name={icon}
        style={{
          marginEnd: 10,
        }}
        color={color}
      />
      <Text
        style={{
          color,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
});

export default Chips;
