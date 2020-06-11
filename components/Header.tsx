import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View testID="RecipeHeader" style={styles.header}>
      <FontAwesome name="plus-square-o" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#EE2C38",
    justifyContent: "flex-end",
    padding: 10,
  },
});

export default Header;
