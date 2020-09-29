import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import BookListItem from './BookListItem';
import Loading from './Loading';

const BooksList = ({ fetchData, refreshable = false }) => {
  const [state, setState] = useState({
    loading: false,
    refreshing: false,
    books: [],
    total: 0,
    itemsPerPage: 0,
    page: 0,
  });

  const internalFetchData = (page, initialFetch = false, refresh = false) => {
    const maxPage = Math.ceil(state.total / state.itemsPerPage);
    if (initialFetch || page <= maxPage) {
      // Do not display Loading when refreshing as, the Flatlist already provides
      // a standard refresh control when refreshing
      setState({ ...state, loading: !refresh, refeshing: refresh });
      fetchData(page).then(({ books: fetchedBooks, total, itemsPerPage }) => {
        const { books } = state;
        setState({
          ...state,
          loading: false,
          refeshing: false,
          books: refresh ? fetchedBooks : [...books, ...fetchedBooks],
          total,
          itemsPerPage,
          page,
        });
      });
    }
  };

  const onRefresh = () => {
    if (refreshable) {
      internalFetchData(1, true, true);
    }
  };

  useEffect(() => {
    internalFetchData(1, true);
  }, []);

  const { loading, refreshing, books, page } = state;

  return (
    <>
      <FlatList
        data={books}
        extraData={state}
        onRefresh={refreshable ? onRefresh : null}
        keyExtractor={(item) => (item ? item.id : null)}
        renderItem={({ item }) => (
          <BookListItem book={item} showLibrary={false} />
        )}
        onEndReachedThreshold={0.5}
        initialNumToRender={20}
        onEndReached={() => internalFetchData(page + 1)}
        refreshing={refreshable ? refreshing : false}
      />
      {loading && <Loading size="medium" />}
    </>
  );
};

export default BooksList;
