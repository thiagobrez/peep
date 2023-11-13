import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import { theme } from '../../lib/theme';

type TextProps = RNTextProps & {
  size?: keyof typeof SIZES;
  variant?: keyof typeof VARIANTS;
  disabled?: boolean;
  color?: string;
};

const SIZES = {
  extraLarge: {
    fontSize: 28,
  },
  large: {
    fontSize: 20,
  },
  medium: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
} as const;

const VARIANTS = {
  label: {
    // fontSize: 20,
  },
  description: {
    // fontSize: 14,
  },
  button: {
    // fontSize: 16,
  },
} as const;

const Text = ({
  size = 'medium',
  variant = 'label',
  disabled = false,
  color = theme.colors.white,
  ...props
}: TextProps) => {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <RNText
      {...props}
      style={[
        styles.container,
        sizeStyle,
        variantStyle,
        disabled && styles.disabled,
        { color },
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    color: theme.colors.white,
  },
  disabled: {
    color: theme.colors.disabled,
  },
});

export default Text;
