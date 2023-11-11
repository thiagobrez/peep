import React from 'react';
import { Platform } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { RootDrawer, RootTab } from '../lib/navigation';
import theme from '../lib/theme';
import DraftsScreen from '../features/drafts/DraftsScreen';
import TabBar from '../lib/navigation/TabBar';
import SettingsScreen from '../features/settings/SettingsScreen';
import { getIconForRoute } from '../lib/navigation/utils';

const screens = (
  <>
    <RootDrawer.Screen
      name="Drafts"
      component={DraftsScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <Octicons
            name={getIconForRoute('Drafts')}
            size={20}
            color={focused ? theme.colors.purple : theme.colors.disabled}
          />
        ),
      }}
    />
    <RootDrawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <Octicons
            name={getIconForRoute('Settings')}
            size={20}
            color={focused ? theme.colors.purple : theme.colors.disabled}
          />
        ),
      }}
    />
  </>
);

const HomeNavigator = () => {
  if (Platform.OS === 'web') {
    return (
      <RootDrawer.Navigator
        screenOptions={{
          header: null,
          drawerType: 'permanent',
          drawerStyle: {
            backgroundColor: theme.colors.black,
            borderRightWidth: 0.5,
            borderRightColor: theme.colors.disabled,
            width: 240,
          },
          drawerLabelStyle: {
            marginLeft: -20,
          },

          drawerActiveTintColor: theme.colors.purple,
          drawerInactiveTintColor: theme.colors.disabled,
          sceneContainerStyle: {
            backgroundColor: theme.colors.black,
          },
        }}>
        {screens}
      </RootDrawer.Navigator>
    );
  }

  return (
    <RootTab.Navigator
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: theme.colors.black,
      }}>
      {screens}
    </RootTab.Navigator>
  );
};

export default HomeNavigator;
