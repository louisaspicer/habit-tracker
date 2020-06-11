import * as React from "react";
import { Text as RNText, AccessibilityProps } from "react-native";
import { typography, colors } from "../styled/theme";
import { calculateMargin } from "../styled/margin";
import { useFonts } from "@use-expo/font";

export type TextColor = "black" | "gray" | "white";

interface TextProps extends AccessibilityProps {
  color?: TextColor;
  isUppercase?: boolean;
  margin?: string;
  align?: "auto" | "left" | "right" | "center" | "justify";
  size?: keyof typeof typography.size.text;
  isUnderlined?: boolean;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
  numberOfLines?: number;
  children: React.ReactNode;
  onPress?: () => void;
}

export const Text = ({
  margin,
  align = "left",
  size,
  color,
  isUppercase,
  isUnderlined,
  onPress,
  ellipsizeMode,
  numberOfLines,
  children,
  ...props
}: TextProps) => {
  const [fontsLoaded] = useFonts({
    "Calibre-Regular": require("../assets/fonts/Calibre-Regular.otf"),
  });

  return (
    <RNText
      style={{
        ...calculateMargin(margin),
        fontFamily: fontsLoaded ? "Calibre-Regular" : "Times New Roman",
        fontWeight: "700",
        textAlign: align,
        lineHeight: size
          ? typography.lineheight.body[size]
          : typography.lineheight.body.m,
        fontSize: size ? typography.size.text[size] : typography.size.text.m,
        color: color ? colors[color] : colors.black,
        textTransform: isUppercase ? "uppercase" : "none",
        textDecorationLine: isUnderlined ? "underline" : "none",
      }}
      onPress={onPress}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
