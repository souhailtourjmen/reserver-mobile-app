import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ARRAYROUTES } from "./config";
import { ROUTES } from "../constant";

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.INTRO}
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      {ARRAYROUTES?.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.label}
            component={item.component}
            options={{ headerShown: false }}
          />
        );
      })}
    </Stack.Navigator>
  );
};
