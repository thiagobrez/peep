import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import Text from '../../components/Text/Text';
import theme from '../theme';
import { getIconForRoute } from './utils';

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            <Octicons
              name={getIconForRoute(route.name)}
              size={20}
              color={isFocused ? theme.colors.purple : theme.colors.disabled}
            />
            <Text
              style={[
                styles.tabItemText,
                isFocused ? styles.tabItemFocused : styles.tabItemUnfocused,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  tabItemText: {
    textAlign: 'center',
  },
  tabItemFocused: {
    color: theme.colors.purple,
  },
  tabItemUnfocused: {
    color: theme.colors.disabled,
  },
});
