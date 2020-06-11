import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    FlatList,
    ScrollView,
} from "react-native";
import data from "../data/habits.json";
import Card from "../components/Card";
import Text from "../components/Text";
import Heading from "../components/Heading";
import { spacing, colors } from "../styled/theme";
import styled from "styled-components";
import WaveBackground from "../components/WaveBackground";

const Background = styled(View)`
    height: 100px;
    width: 100%;
    position: absolute;
    top: 0;
    margin: 0 auto;
`;

const TodayScreen = () => {
    return (
        <View style={styles.container}>
            <Background>
                <WaveBackground />
            </Background>
            <ScrollView
                style={styles.scroll}
                contentInsetAdjustmentBehavior="never"
            >
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    scroll: {
        marginHorizontal: spacing.m,
        height: "100%",
    },
    header: {
        marginTop: 120,
        marginBottom: spacing.l,
    },
    row: {
        height: 100,
        marginTop: spacing.m,
    },
});

export default TodayScreen;
