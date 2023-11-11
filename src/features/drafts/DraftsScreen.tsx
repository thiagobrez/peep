import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import DraftsList from './DraftsList';

function DraftsScreen() {
  const database = useDatabase();
  const drafts = database.get('drafts').query();

  return (
    <SafeAreaView style={styles.container}>
      <DraftsList drafts={drafts} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DraftsScreen;
