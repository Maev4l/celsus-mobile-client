import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Libraries from './libraries/Libraries';
import Contacts from './contacts/Contacts';

const Drawer = createDrawerNavigator();

const Navigator = () => (
  <Drawer.Navigator initialRouteName="Libraries">
    <Drawer.Screen name="Libraries" component={Libraries} />
    <Drawer.Screen name="Contacts" component={Contacts} />
  </Drawer.Navigator>
);

export default Navigator;
