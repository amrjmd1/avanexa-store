import { Feather } from "@expo/vector-icons";
import React, { memo } from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { BASE_URL } from "../services/configs";
import Chips from "./Chips";

const Card = memo(({ data }) => {
  const {
    product_name,
    product_subtitle,
    product_price,
    product_category_name,
    product_brand_name,
    product_images,
    product_model_name,
  } = data || {};

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
      }}
    >
      <Image
        source={
          product_images?.length
            ? {
                uri: BASE_URL + product_images[0].product_image,
              }
            : require("./../../assets/images/placeholder.jpg")
        }
        style={{
          height: 180,
          width: "100%",
          backgroundColor: "#ecf0f1",
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            flex: 1,
          }}
          numberOfLines={1}
        >
          {product_name}
        </Text>
        <Text>${product_price}</Text>
      </View>

      <Text
        style={{
          fontSize: 12,
          color: "#34495e",
        }}
      >
        {product_subtitle}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
        }}
      >
        <Chips text={product_category_name} color={"#9b59b6"} icon="grid" />
        <Chips text={product_brand_name} color={"#2980b9"} icon="award" />
        <Chips text={product_model_name} color={"#e67e22"} icon="box" />
      </ScrollView>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  chips: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginEnd: 10,
  },
});

export default Card;
