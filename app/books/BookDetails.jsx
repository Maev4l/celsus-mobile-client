import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

const BookDetail = () => {
  const {
    params: { bookId },
  } = useRoute();
  return (
    <SafeAreaView>
      <Text>{bookId}</Text>
    </SafeAreaView>
  );
};

export default BookDetail;
