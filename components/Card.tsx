import React from "react";
import { Text, View } from "react-native";

type CardProps = {
  name: string;
  description: string;
};

const Card = ({ name, description }: CardProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default Card;
