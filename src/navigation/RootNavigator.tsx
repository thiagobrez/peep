import React from 'react';
import { Platform } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import NewDraftScreen from '../features/drafts/NewDraftScreen';
import DraftDetailsScreen from '../features/drafts/DraftDetailsScreen';
import SignInScreen from '../features/sign-in/SignInScreen';
import useSession from '../store/useSession';
import useSubRoute from '../store/useSubRoute';
import HomeNavigator from './HomeNavigator';
import StackHeaderRight from './StackHeaderRight';
import { RootStack, RootTabParamList } from './index';

function RootNavigator() {
  const session = useSession(state => state.session);
  const setSubRoute = useSubRoute(state => state.setSubRoute);
  const isSignedIn = !!session?.user;

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: Platform.OS !== 'web',
      }}>
      {isSignedIn ? (
        <>
          <RootStack.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              title: null,
              headerRight: () => <StackHeaderRight />,
            }}
            listeners={({ route }) => ({
              state: () => {
                const subRoute = getFocusedRouteNameFromRoute(
                  route,
                ) as keyof RootTabParamList;
                setSubRoute(subRoute);
              },
            })}
          />
          <RootStack.Screen
            name="NewDraft"
            component={NewDraftScreen}
            options={{ title: 'New Draft' }}
          />
          <RootStack.Screen
            name="DraftDetails"
            component={DraftDetailsScreen}
            options={{ title: null }}
          />
        </>
      ) : (
        <RootStack.Screen name="SignIn" component={SignInScreen} />
      )}
    </RootStack.Navigator>
  );
}

export default RootNavigator;
