import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { colors } from "../styled/theme";
import { Habit } from "../types/habits";
import Heading from "./Heading";

export function HabitMonthView({ habit }: { habit: Habit }) {
    const today = new Date();

    return (
        <View>
            <Heading size="l">{habit.name}</Heading>
            <Text size="m" color="gray" margin="0 0 m 0">
                {habit.description}
            </Text>
            <View style={styles.blocks}>
                {habit.dates.map((h) => {
                    var dateParts = h.day.split("/");
                    const dateObj = new Date(
                        +dateParts[2],
                        Number(dateParts[1]) - 1,
                        +dateParts[0]
                    );

                    const hasDatePast = dateObj < today;
                    const isToday =
                        dateObj.setHours(0, 0, 0, 0) ==
                        today.setHours(0, 0, 0, 0);

                    const blockStyle = StyleSheet.flatten([
                        styles.dayBlock,
                        h.isDone
                            ? {
                                  backgroundColor: colors[habit.color],
                                  borderWidth: 0,
                              }
                            : hasDatePast
                            ? {
                                  backgroundColor: colors.lightGray,
                                  borderWidth: 0,
                              }
                            : {},
                    ]);

                    return (
                        <View style={{ flexDirection: "column" }}>
                            {isToday ? <View style={styles.pointer} /> : null}
                            <View style={blockStyle}></View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 30,
    },
    blocks: {
        flexDirection: "row",
    },
    dayBlock: {
        height: 20,
        width: 7,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: "#DFDFDF",
        marginRight: 4,
        position: "relative",
    },
    pointer: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderBottomWidth: 5,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        transform: [{ rotate: "180deg" }],
        position: "absolute",
        top: -7,
        right: 4,
    },
});
