import React from "react";
import Text from "./Text";
import { View, StyleSheet } from "react-native";
import { spacing, colors, misc } from "../styled/theme";
import Heading from "./Heading";

type CardProps = {
    name: string;
    description: string;
};

const Card = ({ name, description }: CardProps) => {
    return (
        <View style={styles.container}>
            <Heading size="m">{name}</Heading>
            <View style={styles.description}>
                <View style={styles.descriptionText}>
                    <Text ellipsizeMode="tail" numberOfLines={2} size="m">
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
        borderColor: colors.lightGray,
        borderWidth: 3,
        borderRadius: misc.borderRadius,
        width: "49%",
        padding: spacing.s,
        marginRight: spacing.s,
        backgroundColor: colors.white,
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
