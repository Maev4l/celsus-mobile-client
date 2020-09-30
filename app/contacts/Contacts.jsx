import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderLeft } from '../shared/ui';

import ContactsList from './ContactsList';

const Stack = createStackNavigator();

const Contacts = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{ title: 'Contacts', headerLeft: () => <HeaderLeft /> }}
    />
  </Stack.Navigator>
);

export default Contacts;
