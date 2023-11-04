import React from 'react';
import { RootTab } from '../lib/navigation';
import theme from '../lib/theme';
import DraftsScreen from '../features/drafts/DraftsScreen';

const HomeNavigator = () => {
  return (
    <RootTab.Navigator
      tabBar={() => null}
      sceneContainerStyle={{ backgroundColor: theme.colors.black }}>
      <RootTab.Screen name="Drafts" component={DraftsScreen} />
    </RootTab.Navigator>
  );
};

export default HomeNavigator;
