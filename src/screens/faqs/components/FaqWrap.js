import { Feather } from "@expo/vector-icons";
import React, { memo, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

const FaqWrap = memo(({ data }) => {
  const [is_opend, setOpend] = useState(false);
  const { name, faqs } = data || {};

  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
      }}
    >
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() => setOpend((prev) => !prev)}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          {name}
        </Text>
        <Feather name={`chevron-${is_opend ? "up" : "down"}`} />
      </TouchableOpacity>
      {!!is_opend && (
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          {faqs.map((item, key) => {
            const { question, answer } = item || {};

            return (
              <View
                key={key}
                style={{
                  marginBottom: 10,
                  borderWidth: 0.3,
                  borderColor: "#bdc3c7",
                  borderRadius: 8,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    marginBottom: 10,
                  }}
                >
                  {question}
                </Text>
                <Text>{answer}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
});

export default FaqWrap;
