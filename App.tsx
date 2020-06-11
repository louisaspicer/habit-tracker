import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./screens/Home";
import { JournalScreen } from "./screens/Journal";

type BottomTabParams = {
  Today: undefined;
  Journal: undefined;
};

function TodayStackScreen() {
  const TodayStack = createStackNavigator();

  return (
    <TodayStack.Navigator>
      <TodayStack.Screen name="Home" component={HomeScreen} />
    </TodayStack.Navigator>
  );
}

const Tab = createBottomTabNavigator<BottomTabParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // TODO: replace icons
            if (route.name === "Today") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Journal") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Today"
          options={{
            title: "Today",
          }}
          component={TodayStackScreen}
        />
        <Tab.Screen name="Journal" component={JournalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
