import React, { useEffect, useState } from 'react';
import { Container, Content } from 'native-base';

import { graphql } from '../shared/api-client';
import { ListLibraries } from './queries';
import LibraryListItem from './LibraryListItem';
import styles from '../shared/styles';
import { Loading } from '../shared/ui';

const LibrariesList = () => {
  const [state, setState] = useState({ loading: false, libraries: [] });

  const { flex } = styles;

  const fetchData = async () => {
    setState({ ...state, loading: true });
    graphql(ListLibraries).then(({ libraries }) => {
      setState({ ...state, libraries, loading: false });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, libraries } = state;

  if (loading) {
    return <Loading size="medium" />;
  }

  return (
    <Container style={[flex]}>
      <Content padder>
        {libraries.map((library) => {
          const { id } = library;
          return <LibraryListItem key={id} library={library} />;
        })}
      </Content>
    </Container>
  );
};

export default LibrariesList;
