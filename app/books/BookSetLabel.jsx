import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import styles from '../shared/styles';

const { bookSetLabel } = StyleSheet.create({
  bookSetLabel: {
    borderRadius: 5,
  },
});

const BookSetLabel = ({ bookSet, order }) => {
  const { flex, flexRow, flexCenter, flexNoGrow, mt1, ml1, p1 } = styles;

  return (
    <View
      style={[flex, flexRow, flexCenter, mt1, p1, bookSetLabel, flexNoGrow]}>
      <Text>{bookSet}</Text>
      <Text style={[ml1]}>{`(#${order})`}</Text>
    </View>
  );
};

export default BookSetLabel;
