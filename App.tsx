import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Text from "./components/Text";
import { colors } from "./styled/theme";
import Heading from "./components/Heading";
import styled from "styled-components";
import WaveBackground from "./components/WaveBackground";

type BottomTabParams = {
    Today: undefined;
    Journal: undefined;
};

const Background = styled(View)`
    height: 100px;
    width: 100%;
    position: absolute;
    top: 0;
    margin: 0 auto;
`;

function TodayScreen() {
    return (
        <View style={styles.container}>
            <Background>
                <WaveBackground />
            </Background>
            <Heading>Today</Heading>
        </View>
    );
}

function HabitScreen() {
    return (
        <View style={styles.container}>
            <Heading>Habit</Heading>
        </View>
    );
}

function TodayStackScreen() {
    const TodayStack = createStackNavigator();

    return (
        <TodayStack.Navigator screenOptions={{ headerShown: false }}>
            <TodayStack.Screen name="Today" component={TodayScreen} />
        </TodayStack.Navigator>
    );
}

function JournalScreen() {
    return (
        <View style={styles.container}>
            <Heading>Journal</Heading>
            <Text size="l">1 - 30 June</Text>
        </View>
    );
}

function JournalStackScreen() {
    const JournalStack = createStackNavigator();

    return (
        <JournalStack.Navigator>
            <JournalStack.Screen name="Journal" component={JournalScreen} />
            <JournalStack.Screen name="Habit" component={HabitScreen} />
        </JournalStack.Navigator>
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
                <Tab.Screen name="Journal" component={JournalStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: "100%",
    },
});
