import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Text from '../../components/Text/Text';
import Draft from '../../database/model/Draft';

function NewDraftScreen() {
  const database = useDatabase();

  const onSubmit = async () => {
    await database.write(async () => {
      await database.get('drafts').create((draft: Draft) => {
        draft.xLiveUrl = 'x live url example 333';
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text>New Draft</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewDraftScreen;
