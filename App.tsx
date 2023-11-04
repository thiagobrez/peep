import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import useSession from './src/store/useSession';
import { supabase } from './src/lib/supabase';
import { RootStack } from './src/lib/navigation';
import theme from './src/lib/theme';
import HomeNavigator from './src/navigators/HomeNavigator';
import SignInScreen from './src/features/sign-in/SignInScreen';

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
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.black,
          },
        }}>
        {isSignedIn ? (
          <RootStack.Screen name="Home" component={HomeNavigator} />
        ) : (
          <RootStack.Screen name="SignIn" component={SignInScreen} />
        )}
      </RootStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
