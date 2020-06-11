import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "./styled/theme";
import TodayScreen from "./screens/Today";
import { JournalScreen } from "./screens/Journal";

type BottomTabParams = {
    Today: undefined;
    Journal: undefined;
};

function TodayStackScreen() {
    const TodayStack = createStackNavigator();

    return (
        <TodayStack.Navigator screenOptions={{ headerShown: false }}>
            <TodayStack.Screen name="Today" component={TodayScreen} />
        </TodayStack.Navigator>
    );
}

const Tab = createBottomTabNavigator<BottomTabParams>();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        // TODO: replace icons
                        if (route.name === "Today") {
                            iconName = "md-today";
                        } else if (route.name === "Journal") {
                            iconName = "md-calendar";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: colors.pink,
                    inactiveTintColor: colors.gray,
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
