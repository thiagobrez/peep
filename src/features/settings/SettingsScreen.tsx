import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Button from '../../components/Button/Button';
import { supabase } from '../../lib/supabase';
import useSession from '../../store/useSession';

export default function SettingsScreen() {
  const setSession = useSession(state => state.setSession);

  const onSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button variant="danger" title="Logout" onPress={onSignOut} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
