import React from "react";
import { StyleSheet, View } from "react-native";
import * as habitData from "../data/habits.json";
import { HabitMonthView } from "../components/HabitMonthView";
import { spacing } from "../styled/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Heading } from "../components/Heading";
import Text from "../components/Text";

export function JournalScreen() {
  return (
    <ScrollView style={styles.container}>
      <Heading size="xl">Journal</Heading>
      <Text margin="0 0 l 0" color="gray">
        1 - 30 June
      </Text>
      {habitData.habits.map((h, i) => (
        <View style={styles.monthView}>
          <HabitMonthView key={h.name + 1} habit={h} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl,
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  monthView: {
    marginBottom: spacing.xl,
  },
});
