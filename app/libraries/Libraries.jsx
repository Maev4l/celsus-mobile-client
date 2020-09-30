import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LibrariesList from './LibrariesList';
import LibraryContent from './LibraryContent';
import BookDetails from '../books/BookDetails';
import { HeaderLeft, HeaderBack } from '../shared/ui';

const Stack = createStackNavigator();

const Libraries = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LibrariesList"
      component={LibrariesList}
      options={{ title: 'Libraries', headerLeft: () => <HeaderLeft /> }}
    />
    <Stack.Screen
      name="LibraryContent"
      component={LibraryContent}
      options={({ route }) => {
        const {
          params: {
            library: { name: libraryName },
          },
        } = route;
        return {
          title: libraryName,
          ...HeaderBack,
        };
      }}
    />
    <Stack.Screen
      name="BookDetails"
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

export default Libraries;
