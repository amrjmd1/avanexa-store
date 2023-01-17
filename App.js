import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Screens from "./src/screens";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const HomeHeader = (props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: top + 10,
        backgroundColor: "#ecf0f1",
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "baseline",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#2980b9",
          textTransform: "uppercase",
        }}
      >
        Avanexa
      </Text>
      <Text>Store</Text>
    </View>
  );
};

const App = memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screens.Home}
          options={{
            header: (props) => <HomeHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="Faqs"
          component={Screens.Faqs}
          options={{
            headerBackTitleVisible: false,
            headerTintColor: "#2c3e50",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
