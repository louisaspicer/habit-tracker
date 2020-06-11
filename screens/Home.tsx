import React from "react";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import styles from "./styles";
import data from "../data/habits.json";
import Card from "../components/Card";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text>Today</Text>
        <Text>What did you get done today?</Text>
      </View>
      <FlatList
        data={data.habits}
        columnWrapperStyle={style.row}
        numColumns={2}
        renderItem={({ item }) => (
          <Card name={item.name} description={item.description} />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  row: {
    height: 100,
    marginTop: 20,
    flex: 3,
  },
});

export default HomeScreen;
