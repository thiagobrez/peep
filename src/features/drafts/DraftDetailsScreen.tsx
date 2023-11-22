import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Q } from '@nozbe/watermelondb';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { theme } from '../../lib/theme';
import Button from '../../components/Button/Button';
import Post from '../../database/model/Post';
import { RootStackParamList } from '../../navigation';
import PostsList from '../posts/PostsList';

function DraftDetailsScreen() {
  const database = useDatabase();
  const route = useRoute<RouteProp<RootStackParamList, 'DraftDetails'>>();
  const [postText, setPostText] = useState('');
  const posts = database
    .get('posts')
    .query(Q.where('draft_id', route.params.draftId));

  const onSavePost = async () => {
    await database.write(async () => {
      await database.get('posts').create((post: Post) => {
        console.log('route.params.draftId', route.params.draftId);
        post.draft.id = route.params.draftId;
        post.body = postText;
      });
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={postText}
        onChangeText={setPostText}
        accessibilityLabel="Post input field"
        placeholder="What's up?"
        placeholderTextColor={theme.colors.disabled}
        cursorColor={theme.colors.primary}
        selectionColor={theme.colors.primary}
        style={styles.textInput}
        multiline
      />
      <Button title="Save" onPress={onSavePost} />
      <PostsList posts={posts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    color: theme.colors.white,
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
});

export default DraftDetailsScreen;
