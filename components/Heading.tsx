import * as React from "react";
import { Text as RNText, AccessibilityProps } from "react-native";
import { typography, colors } from "../styled/theme";
import { calculateMargin } from "../styled/margin";
import { useFonts } from "@use-expo/font";

interface HeadingProps extends AccessibilityProps {
    isUppercase?: boolean;
    margin?: string;
    align?: "auto" | "left" | "right" | "center" | "justify";
    size?: keyof typeof typography.size.heading;
    isUnderlined?: boolean;
    children: React.ReactNode;
    onPress?: () => void;
}

export const Heading = ({
    margin,
    align = "left",
    size,
    isUppercase,
    isUnderlined,
    onPress,
    children,
    ...props
}: HeadingProps) => {
    const [fontsLoaded] = useFonts({
        "Calibre-Bold": require("../assets/fonts/Calibre-Bold.otf"),
        "Calibre-SemiBold": require("../assets/fonts/Calibre-Semibold.otf"),
    });

    return (
        <RNText
            style={{
                ...calculateMargin(margin),
                fontFamily: fontsLoaded ? "Calibre-Bold" : "Times New Roman",
                fontWeight: "400",
                textAlign: align,
                lineHeight: size
                    ? typography.lineheight.heading[size]
                    : typography.lineheight.heading.xl,
                fontSize: size
                    ? typography.size.heading[size]
                    : typography.size.heading.xl,
                color: colors.black,
                textTransform: isUppercase ? "uppercase" : "none",
                textDecorationLine: isUnderlined ? "underline" : "none",
            }}
            onPress={onPress}
            {...props}
        >
            {children}
        </RNText>
    );
};

export default Heading;
