import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Text/Text';
import { DrawerActions } from '@react-navigation/native';

export default function DrawerHeader({ title, navigation }) {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View>
      <Text onPress={openDrawer}>{title}</Text>
    </View>
  );
}
