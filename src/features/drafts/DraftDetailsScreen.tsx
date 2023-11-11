import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../components/Text/Text';

function DraftDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>DraftDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DraftDetailsScreen;
