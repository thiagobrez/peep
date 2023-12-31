import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../lib/theme';
import useSubRoute from '../store/useSubRoute';
import { NavigationProp, RootTabParamList } from './index';

export default function StackHeaderRight() {
  const navigation = useNavigation<NavigationProp<'Home', 'Drafts'>>();
  const subRoute = useSubRoute(state => state.subRoute);

  const onPress = () => {
    navigation.navigate('NewDraft');
  };

  const getIconForRoute = (route: keyof RootTabParamList) => {
    switch (route) {
      case 'Drafts':
        return (
          <Octicons
            name="plus-circle"
            size={20}
            color={theme.colors.primary}
            onPress={onPress}
          />
        );
      default:
        return null;
    }
  };

  return getIconForRoute(subRoute);
}
