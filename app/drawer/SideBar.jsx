import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';

import SideBarItem from './SideBarItem';
import styles from '../shared/styles';

const SideBar = (props) => {
  const { flex, flexColumn, mt3 } = styles;
  const {
    navigation,
    state: { index },
  } = props;

  return (
    <ScrollView alwaysBounceVertical={false}>
      <SafeAreaView
        style={[flex]}
        forceInset={{ top: 'always', horizontal: 'never' }}>
        {/* Navigation Items */}
        <View style={[flex, flexColumn, mt3]}>
          <SideBarItem
            label="Libraries"
            destination="Libraries"
            icon="book"
            navigation={navigation}
            focused={index === 0}
          />
          <SideBarItem
            label="Contacts"
            destination="Contacts"
            icon="user-friends"
            navigation={navigation}
            focused={index === 1}
          />
          <SideBarItem
            label="Search"
            destination="Search"
            icon="search"
            navigation={navigation}
            focused={index === 2}
          />
          <SideBarItem
            label="Settings"
            destination="SettingsStack"
            icon="cog"
            navigation={navigation}
            focused={index === 3}
          />
          <SideBarItem
            label="Information"
            destination="Information"
            icon="info-circle"
            navigation={navigation}
            focused={index === 4}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SideBar;
