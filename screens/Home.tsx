import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import data from "../data/habits.json";
import Card from "../components/Card";
import Text from "../components/Text";
import { spacing } from "../styled/theme";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text size={"l"}>Today</Text>
        <Text size={"m"}>What did you get done today?</Text>
      </View>
      <FlatList
        data={data.habits}
        columnWrapperStyle={styles.row}
        numColumns={2}
        renderItem={({ item }) => (
          <Card name={item.name} description={item.description} />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.l,
  },
  header: {
    marginTop: spacing.xl,
    marginBottom: spacing.l,
    width: 344,
  },
  row: {
    height: 100,
    marginTop: spacing.m,
  },
});

export default HomeScreen;
