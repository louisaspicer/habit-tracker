import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Text from "./components/Text";

type BottomTabParams = {
  Home: undefined;
  Journal: undefined;
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

function HabitScreen() {
  return (
    <View style={styles.container}>
      <Text>Habit</Text>
    </View>
  );
}

function HomeStackScreen() {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function JournalScreen() {
  return (
    <View style={styles.container}>
      <Text>Journal</Text>
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
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // TODO: replace icons
            if (route.name === "Home") {
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
          name="Home"
          options={{
            title: "Home",
          }}
          component={HomeStackScreen}
        />
        <Tab.Screen name="Journal" component={JournalStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
