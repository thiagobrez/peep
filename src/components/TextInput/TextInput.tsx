import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import theme from '../../lib/theme';
import Text from '../Text/Text';

type TextInputProps = RNTextInputProps & {
  label?: string;
  disabled?: boolean;
};

const TextInput = ({
  disabled = false,
  placeholderTextColor = theme.colors.disabled,
  ...props
}: TextInputProps) => {
  return (
    <View style={styles.container}>
      {props.label && <Text variant="description">{props.label}</Text>}

      <RNTextInput
        editable={!disabled}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInput, disabled && styles.disabled]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 4,
  },
  textInput: {
    width: '100%',
    height: 48,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 12,
    color: theme.colors.white,
  },
  disabled: {
    borderColor: theme.colors.disabled,
    color: theme.colors.disabled,
  },
});

export default TextInput;
