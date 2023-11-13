import React from 'react';
import { withObservables } from '@nozbe/watermelondb/react';
import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../../components/Text/Text';
import Draft from '../../database/model/Draft';
import { NavigationProp } from '../../navigation';

type DraftItemProps = {
  draft: Draft;
  index: number;
};

const DraftItem = ({ draft, index }: DraftItemProps) => {
  const navigation = useNavigation<NavigationProp<'Home', 'Drafts'>>();

  const onPress = () => {
    navigation.navigate('DraftDetails', { draft });
  };

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}>
      <Text>Draft {index}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 50,
  },
  pressed: {
    opacity: 0.7,
  },
});

const Enhanced = withObservables(['draft'], ({ draft }) => ({
  draft,
}))(DraftItem);

export default Enhanced;
