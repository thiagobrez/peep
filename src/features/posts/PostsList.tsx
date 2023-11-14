import React from 'react';
import { withObservables } from '@nozbe/watermelondb/react';
import { FlatList, View } from 'react-native';
import { theme } from '../../lib/theme';
import PostItem from './PostItem';

function PostsList({ posts }) {
  const renderItem = ({ item }) => <PostItem post={item} />;

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 1,
            backgroundColor: theme.colors.disabled,
            marginVertical: 8,
          }}
        />
      )}
    />
  );
}

const Enhanced = withObservables(['posts'], ({ posts }) => ({
  posts,
}))(PostsList);

export default Enhanced;
