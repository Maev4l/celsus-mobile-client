import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
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

  const fetchData = async (page) => {
    const {
      library: { content },
    } = await graphql(FetchLibraryBooks, { id: libraryId, page });

    return content;
  };

  const onPressBook = (bookId) => {
    navigation.navigate('BookDetails', { bookId });
  };

  const { flex, p2 } = styles;
  return (
    <SafeAreaView style={[flex, p2]}>
      <BooksList fetchData={fetchData} onPress={onPressBook} refreshable />
    </SafeAreaView>
  );
};

export default LibrariesContent;
