import React from "react";
import Text from "./Text";
import { View, StyleSheet } from "react-native";
import { spacing } from "../styled/theme";

type CardProps = {
  name: string;
  description: string;
};

const Card = ({ name, description }: CardProps) => {
  return (
    <View style={styles.container}>
      <Text size={"m"}>{name}</Text>
      <View style={styles.description}>
        <View style={styles.descriptionText}>
          <Text
            margin={"0 0 0 0"}
            ellipsizeMode="tail"
            numberOfLines={2}
            size={"s"}
          >
            {description}
          </Text>
        </View>
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
    width: "49%",
    padding: spacing.xs,
    marginRight: spacing.s,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionText: {
    maxWidth: 136,
  },
  square: {
    width: spacing.m,
    height: spacing.m,
    backgroundColor: "#E3E3E3",
    borderRadius: 5,
  },
});

export default Card;
