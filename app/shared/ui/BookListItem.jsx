import React from 'react';
import { ListItem, Body, Thumbnail, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';

import styles from '../styles';
import { BookThumbnailPlaceHolder } from '../assets';

const { bookThumbnail, libraryLabel } = StyleSheet.create({
  bookThumbnail: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    height: 120,
    width: 80,
  },
  libraryLabel: {
    borderRadius: 5,
    overflow: 'hidden',
  },
});

const BookListItem = ({ book, onPress, showLibrary }) => {
  const {
    id: bookId,
    title,
    authors,
    thumbnail,
    library: { name: libraryName },
  } = book;

  const {
    flex,
    flexCenter,
    flexRow,
    flexColumn,
    pl3,
    mt1,
    p1,
    italic,
    flexSelfStart,
  } = styles;

  const onPressBook = () => {
    if (onPress) {
      onPress({ bookId, title });
    }
  };

  const source = thumbnail
    ? { uri: `data:image/png;base64,${thumbnail}` }
    : BookThumbnailPlaceHolder;

  return (
    <ListItem style={{ marginLeft: 0 }} onPress={onPressBook}>
      <Body style={[flex, flexCenter, flexRow]}>
        <Thumbnail square style={[bookThumbnail]} source={source} />
        <View style={[pl3, flex, flexCenter, flexColumn]}>
          <Text style={[flexSelfStart]}>{title}</Text>
          <Text style={[italic, flexSelfStart, mt1]}>{authors.join(', ')}</Text>
          {showLibrary && libraryName && (
            <Text style={[mt1, flexSelfStart, libraryLabel, p1]}>
              {libraryName}
            </Text>
          )}
        </View>
      </Body>
    </ListItem>
  );
};

export default BookListItem;
