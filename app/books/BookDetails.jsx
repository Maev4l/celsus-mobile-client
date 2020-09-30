import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { graphql } from '../shared/api-client';
import { FetchBook } from './queries';
import styles from '../shared/styles';
import { BookThumbnailPlaceHolder } from '../shared/assets';
import { Loading } from '../shared/ui';
import BookSetLabel from './BookSetLabel';

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

const BookDetail = () => {
  const [state, setState] = useState({ loading: false, book: [] });

  const {
    params: { bookId },
  } = useRoute();

  const fetchData = async () => {
    const { book } = await graphql(FetchBook, { id: bookId });
    return book;
  };

  useEffect(() => {
    setState({ ...state, loading: true });
    fetchData().then((book) => {
      setState({ ...state, loading: false, book });
    });
  }, []);

  const {
    flex,
    flexStart,
    flexRow,
    ml2,
    flexColumn,
    flexSelfStart,
    bold,
    italic,
    mt1,
    ml1,
    p1,
    mt3,
  } = styles;

  const { loading } = state;

  if (loading) {
    return <Loading size="medium" />;
  }

  const {
    book: {
      thumbnail,
      title,
      description,
      authors,
      bookSet,
      bookSetOrder,
      isbn13,
      isbn10,
      library,
    },
  } = state;

  const source = thumbnail
    ? { uri: `data:image/png;base64,${thumbnail}` }
    : BookThumbnailPlaceHolder;

  return (
    <Container style={[flex]}>
      <Content padder>
        <View style={[flex, flexStart, flexRow]}>
          <Thumbnail square style={[bookThumbnail]} source={source} />
          {/* Title, authors, and library name */}
          <View style={[ml2, flex, flexColumn]}>
            <Text style={[bold, flexSelfStart]}>{title}</Text>
            {authors && authors.length > 0 ? (
              <Text style={[italic, mt1, flexSelfStart]}>
                {authors.join(', ')}
              </Text>
            ) : null}
            {bookSet ? (
              <View style={[flexSelfStart]}>
                <BookSetLabel bookSet={bookSet} order={bookSetOrder} />
              </View>
            ) : null}
            {library ? (
              <Text style={[mt1, p1, libraryLabel, flexSelfStart]}>
                {library.name}
              </Text>
            ) : null}
          </View>
        </View>
        {/* Description */}
        <View style={[mt3]}>
          <Text>{description}</Text>
        </View>
        {/* ISBN */}
        <View style={[mt3]}>
          {isbn13 ? (
            <View style={[flex, flexRow]}>
              <Text style={[bold]}>ISBN-13:</Text>
              <Text style={[ml1]}>{isbn13}</Text>
            </View>
          ) : null}

          {isbn10 ? (
            <View style={[flex, flexRow]}>
              <Text style={[bold]}>ISBN-10:</Text>
              <Text style={[ml1]}>{isbn10}</Text>
            </View>
          ) : null}
        </View>
      </Content>
    </Container>
  );
};

export default BookDetail;
