import React from 'react';
import { RootDrawer, RootTab } from '../lib/navigation/index';
import theme from '../lib/theme';
import DraftsScreen from '../features/drafts/DraftsScreen';
import TabBar from '../lib/navigation/TabBar';
import { Platform } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import DrawerHeader from '../lib/navigation/DrawerHeader';

const screens = (
  <>
    <RootDrawer.Screen name="Drafts" component={DraftsScreen} />
  </>
);

const HomeNavigator = () => {
  if (Platform.OS === 'web') {
    return (
      <RootDrawer.Navigator
        screenOptions={{
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <DrawerHeader title={title} navigation={navigation} />;
          },
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
