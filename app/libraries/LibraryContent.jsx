import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Content, Text } from 'native-base';

import styles from '../shared/styles';

const LibrariesContent = ({ library }) => {
  const { flex } = styles;
  return (
    <SafeAreaView style={[flex]}>
      <Container>
        <Content padder>
          <Text>Libraries Content</Text>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default LibrariesContent;
