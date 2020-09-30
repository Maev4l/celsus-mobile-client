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

  const { flex, pl2, pr2 } = styles;

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
    <SafeAreaView style={[flex, pl2, pr2]} edges={['right', 'bottom', 'left']}>
      <BooksList fetchData={fetchData} onPress={onPressBook} refreshable />
    </SafeAreaView>
  );
};

export default LibrariesContent;
