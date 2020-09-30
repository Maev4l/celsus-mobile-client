import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './SearchScreen';
import BookDetails from '../books/BookDetails';
import { HeaderLeft, HeaderBack } from '../shared/ui';

const Stack = createStackNavigator();

const Search = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{ title: 'Search', headerLeft: () => <HeaderLeft /> }}
    />
    <Stack.Screen
      name="SearchBookDetails"
      component={BookDetails}
      options={({ route }) => {
        const {
          params: { title },
        } = route;
        return {
          title,
          ...HeaderBack,
        };
      }}
    />
  </Stack.Navigator>
);

export default Search;
