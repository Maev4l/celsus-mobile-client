import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LibrariesList from './LibrariesList';
import LibraryContent from './LibraryContent';
import BookDetails from '../books/BookDetails';

const Stack = createStackNavigator();

const Libraries = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LibrariesList"
      component={LibrariesList}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LibraryContent"
      component={LibraryContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="BookDetails"
      component={BookDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Libraries;
