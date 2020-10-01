import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import { Title } from 'native-base';
import { useSelector } from 'react-redux';

import SideBarItem from './SideBarItem';
import styles from '../shared/styles';

const SideBar = (props) => {
  const { flex, flexColumn, mt3, mt2, mb2, pl2 } = styles;
  const {
    navigation,
    state: { index },
  } = props;

  const { username } = useSelector((store) => ({
    username: store.authn.username,
  }));
  return (
    <ScrollView alwaysBounceVertical={false}>
      <SafeAreaView
        style={[flex]}
        forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={[flex, flexColumn, mt3]}>
          <Title style={[pl2, mt2, mb2]}>Welcome {username} !</Title>
          <SideBarItem
            label="Libraries"
            icon="book"
            focused={index === 0}
            style={[pl2, mt2, mb2]}
            onPress={() => navigation.navigate('Libraries')}
          />
          <SideBarItem
            label="Contacts"
            icon="user-friends"
            focused={index === 1}
            style={[pl2, mt2, mb2]}
            onPress={() => navigation.navigate('Contacts')}
          />
          <SideBarItem
            label="Search"
            icon="search"
            focused={index === 2}
            style={[pl2, mt2, mb2]}
            onPress={() => navigation.navigate('Search')}
          />
          {/* 
          <SideBarItem
            label="Settings"
            icon="cog"
            focused={index === 3}
            style={[pl2, mt2, mb2]}
            onPress={() => navigation.navigate('Settings')}
          />
          <SideBarItem
            label="Information"
            icon="info-circle"
            focused={index === 4}
            style={[pl2, mt2, mb2]}
            onPress={() => navigation.navigate('Information')}
          />
          */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SideBar;
