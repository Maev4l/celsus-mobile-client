import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Item } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../shared/styles';

import { graphql } from '../shared/api-client';
import { SearchBooks } from './queries';
import { BooksList } from '../shared/ui';

const SearchScreen = ({ navigation }) => {
  const [state, setState] = useState({ refetch: false, query: '' });
  const { flex, p1, p2, iconRegular } = styles;

  const { refetch } = state;

  const onChangeQuery = (value) => {
    setState({ ...state, query: value });
  };

  const fetchData = async (page) => {
    const { query } = state;
    if (query) {
      const keywords = query.split(' ');
      const {
        searchBooks: { books, total, itemsPerPage },
      } = await graphql(SearchBooks, { query: { page, keywords } });
      return { books, total, itemsPerPage };
    }
    return { books: [], total: 0, itemsPerPage: 0 };
  };

  const onSubmit = () => {
    setState({ ...state, refetch: !refetch });
  };

  const onDismissQuery = () => {
    setState({ ...state, query: '' });
  };

  const onPressBook = ({ bookId, title }) => {
    navigation.navigate('SearchBookDetails', { bookId, title });
  };

  const { query } = state;
  return (
    <View style={[flex, p2]}>
      <Item regular>
        <Input
          value={query}
          onChangeText={(value) => onChangeQuery(value)}
          placeholder="Search by title or by author"
          autoCapitalize="none"
          textContentType="none"
          onSubmitEditing={onSubmit}
        />
        <Button onPress={onDismissQuery} transparent style={[p1]}>
          <FontAwesome5 name="times-circle" style={[iconRegular]} />
        </Button>
      </Item>

      <BooksList
        fetchData={fetchData}
        onPress={onPressBook}
        refreshable={false}
        refetch={refetch}
        aggregateFetchedData={false}
        showLibrary
      />
    </View>
  );
};

export default SearchScreen;
