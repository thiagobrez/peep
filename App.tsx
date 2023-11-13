import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { DatabaseProvider } from '@nozbe/watermelondb/react';
import useSession from './src/store/useSession';
import { supabase } from './src/lib/supabase';
import { reactNavigationTheme } from './src/lib/theme';
import { database } from './src/database';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  const setSession = useSession(state => state.setSession);

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
    <>
      <StatusBar style="auto" />

      <DatabaseProvider database={database}>
        <NavigationContainer theme={reactNavigationTheme}>
          <RootNavigator />
        </NavigationContainer>
      </DatabaseProvider>
    </>
  );
}
