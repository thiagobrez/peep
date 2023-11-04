import React from 'react';
import {
  StyleSheet,
  Pressable,
  PressableProps,
  ActivityIndicator,
} from 'react-native';
import theme from '../lib/theme';
import Text from './Text';

type ButtonProps = PressableProps & {
  variant?: keyof typeof VARIANTS;
  title: string;
  loading?: boolean;
};

const VARIANTS = {
  default: {
    borderColor: theme.colors.white,
    color: theme.colors.white,
  },
  danger: {
    color: theme.colors.danger,
    borderColor: theme.colors.danger,
  },
} as const;

const Button = ({
  variant = 'default',
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const variantStyle = VARIANTS[variant];

  return (
    <Pressable
      onPress={disabled ? () => {} : props.onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.container,
        variantStyle,
        pressed && { opacity: 0.8 },
        disabled && styles.disabled,
        loading && styles.disabled,
        props.style,
      ]}
      {...props}>
      {loading ? (
        <ActivityIndicator color={theme.colors.disabled} />
      ) : (
        <Text variant="button" disabled={!!disabled} color={variantStyle.color}>
          {props.title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.white,
    color: theme.colors.white,
  },
  disabled: {
    borderColor: theme.colors.disabled,
    color: theme.colors.disabled,
  },
});

export default Button;
