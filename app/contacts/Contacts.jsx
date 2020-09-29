import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsList from './ContactsList';

const Stack = createStackNavigator();

const Contacts = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Contacts;
