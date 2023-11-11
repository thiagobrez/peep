import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';
import { NavigationProp } from './index';

export default function StackHeaderRight() {
  const navigation = useNavigation<NavigationProp<'Home', 'Drafts'>>();

  const onPress = () => {
    navigation.navigate('NewDraft');
  };

  return (
    <Octicons
      name="plus-circle"
      size={20}
      color={theme.colors.purple}
      onPress={onPress}
    />
  );
}
