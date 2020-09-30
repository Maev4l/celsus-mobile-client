/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Libraries from './libraries/Libraries';
import Contacts from './contacts/Contacts';
import Search from './search/Search';
import SideBar from './drawer/SideBar';

const Drawer = createDrawerNavigator();

const Navigator = () => (
  <Drawer.Navigator
    initialRouteName="Libraries"
    drawerType="back"
    drawerContent={(props) => <SideBar {...props} />}>
    <Drawer.Screen name="Libraries" component={Libraries} />
    <Drawer.Screen name="Contacts" component={Contacts} />
    <Drawer.Screen name="Search" component={Search} />
  </Drawer.Navigator>
);

export default Navigator;
