import React from 'react';
import { Platform } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { theme } from '../lib/theme';
import DraftsScreen from '../features/drafts/DraftsScreen';
import SettingsScreen from '../features/settings/SettingsScreen';
import TabBar from './TabBar';
import { getIconForRoute } from './utils';
import { RootDrawer, RootTab, RootTabParamList } from './index';

const screens: {
  name: keyof RootTabParamList;
  component: () => React.JSX.Element;
}[] = [
  {
    name: 'Drafts',
    component: DraftsScreen,
  },
  {
    name: 'Settings',
    component: SettingsScreen,
  },
];

const HomeNavigator = () => {
  if (Platform.OS === 'web') {
    return (
      <RootDrawer.Navigator
        screenOptions={{
          header: () => null,
          drawerType: 'permanent',
          drawerStyle: {
            width: 240,
          },
          drawerLabelStyle: {
            marginLeft: -20,
          },
          drawerActiveTintColor: theme.colors.primary,
          drawerInactiveTintColor: theme.colors.disabled,
        }}>
        {screens.map(screen => (
          <RootDrawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              drawerIcon: ({ focused }) => (
                <Octicons
                  name={getIconForRoute(screen.name)}
                  size={20}
                  color={focused ? theme.colors.primary : theme.colors.disabled}
                />
              ),
            }}
          />
        ))}
      </RootDrawer.Navigator>
    );
  }

  return (
    <RootTab.Navigator tabBar={TabBar} screenOptions={{ headerShown: false }}>
      {screens.map(screen => (
        <RootTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Octicons
                name={getIconForRoute(screen.name)}
                size={20}
                color={focused ? theme.colors.primary : theme.colors.disabled}
              />
            ),
          }}
        />
      ))}
    </RootTab.Navigator>
  );
};

export default HomeNavigator;
