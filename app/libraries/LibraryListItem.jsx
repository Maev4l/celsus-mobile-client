import React from 'react';
import { Card, CardItem, H3 } from 'native-base';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../shared/styles';

const LibraryListItem = ({ library }) => {
  const navigation = useNavigation();

  const { bold } = styles;

  const { name, description, booksCount } = library;
  const onPress = () => {
    navigation.navigate('LibraryContent', { library });
  };
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Card>
        <CardItem header>
          <H3 style={[bold]}>{name}</H3>
        </CardItem>
        <CardItem>
          <Text>{description}</Text>
        </CardItem>
        <CardItem footer bordered>
          <Text>{`${booksCount} ${booksCount === 1 ? 'book' : 'books'}`}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default LibraryListItem;
