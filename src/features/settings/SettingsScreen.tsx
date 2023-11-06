import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Text from '../../components/Text/Text';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
