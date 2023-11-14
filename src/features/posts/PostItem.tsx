import React from 'react';
import { withObservables } from '@nozbe/watermelondb/react';
import { StyleSheet } from 'react-native';
import Text from '../../components/Text/Text';
import Post from '../../database/model/Post';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return <Text>{post.body}</Text>;
};

const styles = StyleSheet.create({});

const Enhanced = withObservables(['post'], ({ post }) => ({
  post,
}))(PostItem);

export default Enhanced;
