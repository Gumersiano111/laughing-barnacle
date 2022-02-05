import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Reminderscreen from "../screens/Reminderscreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Inicio" component={TabNavigator} />
      <Stack.Screen name="PantalladeHistoria" component={Reminderscreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
