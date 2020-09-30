import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './SearchScreen';
import BookDetails from '../books/BookDetails';

const Stack = createStackNavigator();

const Search = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchBookDetails"
      component={BookDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Search;
