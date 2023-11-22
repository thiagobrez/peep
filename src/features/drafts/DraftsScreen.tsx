import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Button from '../../components/Button/Button';
import { syncDatabase } from '../../database/sync';
import DraftsList from './DraftsList';

function DraftsScreen() {
  const database = useDatabase();
  const drafts = database.get('drafts').query();

  return (
    <SafeAreaView style={styles.container}>
      <DraftsList drafts={drafts} />
      <Button
        title="Sync"
        onPress={() => {
          void syncDatabase();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DraftsScreen;
