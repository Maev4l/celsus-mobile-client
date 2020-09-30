import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { graphql } from '../shared/api-client';
import { FetchLibraryBooks } from './queries';
import styles from '../shared/styles';
import { BooksList } from '../shared/ui';

const LibrariesContent = ({ navigation }) => {
  const {
    params: {
      library: { id: libraryId },
    },
  } = useRoute();

  const { flex, p2 } = styles;

  const fetchData = async (page) => {
    const {
      library: { content },
    } = await graphql(FetchLibraryBooks, { id: libraryId, page });

    return content;
  };

  const onPressBook = ({ bookId, title }) => {
    navigation.navigate('BookDetails', { bookId, title });
  };

  return (
    <View style={[flex, p2]}>
      <BooksList fetchData={fetchData} onPress={onPressBook} refreshable />
    </View>
  );
};

export default LibrariesContent;
