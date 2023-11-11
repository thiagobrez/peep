import React from 'react';
import { withObservables } from '@nozbe/watermelondb/react';
import { FlatList, View } from 'react-native';
import theme from '../../lib/theme';
import DraftItem from './DraftItem';

function DraftsList({ drafts }) {
  const renderItem = ({ item, index }) => (
    <DraftItem draft={item} index={index} />
  );

  return (
    <FlatList
      data={drafts}
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

const Enhanced = withObservables(['drafts'], ({ drafts }) => ({
  drafts,
}))(DraftsList);

export default Enhanced;
