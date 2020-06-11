import React from "react";
import Text from "./Text";
import { View, StyleSheet } from "react-native";

type CardProps = {
  name: string;
  description: string;
};

const Card = ({ name, description }: CardProps) => {
  return (
    <View style={styles.container}>
      <Text size={"m"}>{name}</Text>
      <View style={styles.description}>
        <Text
          margin={"0 s 0 0"}
          ellipsizeMode="tail"
          numberOfLines={2}
          size={"s"}
        >
          {description}
        </Text>
        <View style={styles.square}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#E3E3E3",
    borderWidth: 3,
    borderRadius: 8,
    width: 156,
    padding: 12,
    marginRight: 16,
  },
  description: {
    flexDirection: "row",
  },
  square: {
    width: 16,
    height: 16,
    backgroundColor: "#E3E3E3",
    borderRadius: 5,
  },
});

export default Card;
