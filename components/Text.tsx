import * as React from "react";
import { Text as RNText, AccessibilityProps } from "react-native";
import { typography, colors } from "../styled/theme";
import { calculateMargin } from "../styled/margin";

export type TextColor = "black" | "gray" | "white";

interface TextProps extends AccessibilityProps {
  color?: TextColor;
  isUppercase?: boolean;
  margin?: string;
  align?: "auto" | "left" | "right" | "center" | "justify";
  size?: keyof typeof typography.size.text;
  isUnderlined?: boolean;
  onPress?: () => void;
}

export class Text extends React.Component<TextProps> {
  render() {
    const {
      margin,
      align,
      size,
      color,
      isUppercase,
      isUnderlined,
      onPress,
      children,
      ...props
    } = this.props;

    return (
      <RNText
        style={{
          ...calculateMargin(margin),
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
        {...props}
      >
        {children}
      </RNText>
    );
  }
}

export default Text;
