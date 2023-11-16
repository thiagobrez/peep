import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Text from '../../components/Text/Text';
import Draft from '../../database/model/Draft';
import { supabase } from '../../lib/supabase';
import useSession from '../../store/useSession';

function NewDraftScreen() {
  const database = useDatabase();
  const session = useSession(state => state.session);

  const onSubmit = async () => {
    console.log('session.user', session.user.id);

    // Query all records for the profiles table in supabase
    // const { data, error } = await supabase
    //   .from('profiles')
    //   .select('id')
    //   .eq('id', session.user?.id);
    //
    // console.log('data', data);
    // console.log('error', error);

    await database.write(async () => {
      await database.get('drafts').create((draft: Draft) => {
        // draft._raw.id = '66ee6838-7fad-4f7e-a70c-ce19ea894cf2';
        draft.profile.id = session.user.id;
        draft.xLiveUrl = String(Date.now());
        draft.blueskyLiveUrl = String(Date.now());
        draft.lensLiveUrl = String(Date.now());
        draft.farcasterLiveUrl = String(Date.now());
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text onPress={onSubmit}>New Draft</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewDraftScreen;
