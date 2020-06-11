import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import data from "../data/habits.json";
import Card from "../components/Card";
import Text from "../components/Text";
import Heading from "../components/Heading";
import { spacing } from "../styled/theme";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Heading>Today</Heading>
        <Text size={"l"}>What did you get done today?</Text>
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
    justifyContent: "center",
    paddingHorizontal: spacing.m,
  },
  header: {
    marginTop: spacing.xl,
    marginBottom: spacing.l,
  },
  row: {
    height: 100,
    marginTop: spacing.m,
  },
});

export default HomeScreen;
