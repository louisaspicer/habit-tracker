import React from "react";
import Text from "./Text";
import { View, StyleSheet } from "react-native";
import { spacing, colors, misc } from "../styled/theme";
import Heading from "./Heading";
import styled from "styled-components";

type CardProps = {
    name: string;
    description: string;
};

const SquareWrapper = styled(View)`
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Square = styled(View)`
    margin: 0 ${spacing.m}px;
    width: ${spacing.m}px;
    height: ${spacing.m}px;
    background: ${colors.lightGray};
    border-radius: 4px;
`;

const Container = styled(View)`
    border-color: ${colors.lightGray};
    border-width: 3;
    border-radius: ${misc.borderRadius}px;
    padding: ${spacing.s}px;
    background: ${colors.white};
    flex: 1;
    flex-direction: row;
    margin: 0 ${spacing.s}px;
`;

const Card = ({ name, description }: CardProps) => {
    return (
        <Container>
            <View style={styles.copy}>
                <Heading size="m">{name}</Heading>

                <Text ellipsizeMode="tail" numberOfLines={2} size="m">
                    {description}
                </Text>
            </View>
            <SquareWrapper>
                <Square />
            </SquareWrapper>
        </Container>
    );
};

const styles = StyleSheet.create({
    copy: {
        flex: 1,
    },
});

export default Card;
