import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import Detail from "../views/Detail";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: "rgba(7, 26, 93, 1)" },
  headerTitleStyle: { color: "#fff", fontSize: 23 },
  headerTitleAlign: "center",
  headerTintColor: "#fff",
};

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
