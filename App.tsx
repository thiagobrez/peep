import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { DatabaseProvider } from '@nozbe/watermelondb/react';
import useSession from './src/store/useSession';
import { supabase } from './src/lib/supabase';
import { RootStack } from './src/lib/navigation';
import theme from './src/lib/theme';
import HomeNavigator from './src/navigators/HomeNavigator';
import SignInScreen from './src/features/sign-in/SignInScreen';
import { database } from './src/database';
import StackHeaderRight from './src/lib/navigation/StackHeaderRight';
import DraftDetailsScreen from './src/features/drafts/DraftDetailsScreen';
import NewDraftScreen from './src/features/drafts/NewDraftScreen';

export default function App() {
  const session = useSession(state => state.session);
  const setSession = useSession(state => state.setSession);
  const isSignedIn = !!session?.user;

  useEffect(() => {
    void supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession(session);
      }
    });
  }, [setSession]);

  return (
    <DatabaseProvider database={database}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerTintColor: theme.colors.purple,
            headerStyle: {
              backgroundColor: theme.colors.black,
            },
            headerRight: () => <StackHeaderRight />,
            contentStyle: {
              backgroundColor: theme.colors.black,
            },
          }}>
          {isSignedIn ? (
            <>
              <RootStack.Screen
                name="Home"
                component={HomeNavigator}
                options={{ title: null }}
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
        <StatusBar style="auto" />
      </NavigationContainer>
    </DatabaseProvider>
  );
}
