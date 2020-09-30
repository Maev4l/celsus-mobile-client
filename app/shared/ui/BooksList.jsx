import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import BookListItem from './BookListItem';
import Loading from './Loading';

const BooksList = ({
  fetchData,
  onPress,
  aggregateFetchedData = true,
  refreshable = false,
  refetch = false,
  showLibrary = false,
}) => {
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
        const { books: previousBooks } = state;
        setState({
          ...state,
          loading: false,
          refeshing: false,
          // If refreshing, remove previous books, just display the new fetched books
          // however, in the some case such as search workflows, we do not want to aggregate
          // the previous books with the new fetched books
          books:
            !aggregateFetchedData || refresh
              ? fetchedBooks
              : [...previousBooks, ...fetchedBooks],
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
  }, [refetch]);

  const { loading, refreshing, books, page } = state;

  return (
    <>
      <FlatList
        data={books}
        extraData={state}
        onRefresh={refreshable ? onRefresh : null}
        keyExtractor={(item) => (item ? item.id : null)}
        renderItem={({ item }) => (
          <BookListItem
            book={item}
            showLibrary={showLibrary}
            onPress={onPress}
          />
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
