import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import * as habitData from "../data/habits.json";
import { HabitMonthView } from "../components/HabitMonthView";
import { spacing, colors } from "../styled/theme";
import { Heading } from "../components/Heading";
import Text from "../components/Text";
import WaveBackground from "../components/WaveBackground";
import styled from "styled-components";

const Background = styled(View)`
    height: 100px;
    width: 100%;
    position: absolute;
    top: 0;
    margin: 0 auto;
`;

export function JournalScreen() {
    return (
        <View style={styles.container}>
            <Background>
                <WaveBackground />
            </Background>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.header}>
                    <Heading size="xl">Journal</Heading>
                    <Text margin="0 0 l 0" color="gray">
                        1 - 30 June
                    </Text>
                </View>
                {habitData.habits.map((h, i) => (
                    <View style={styles.monthView}>
                        <HabitMonthView key={h.name + 1} habit={h} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    scroll: { marginHorizontal: spacing.m, height: "100%" },
    monthView: {
        marginBottom: spacing.xl,
    },
    header: {
        marginTop: 120,
        marginBottom: spacing.l,
    },
});
