import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Content, Text } from 'native-base';

import styles from '../shared/styles';
import { BooksList } from '../shared/ui';

const LibrariesContent = ({ library }) => {
  const { flex } = styles;
  return (
    <SafeAreaView style={[flex]}>
      <Container>
        <Content padder>
          <BooksList />
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default LibrariesContent;
