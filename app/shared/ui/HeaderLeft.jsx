import React from 'react';
import { Button } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';

const HeaderLeft = () => {
  const { iconRegular, ml1 } = styles;
  const navigation = useNavigation();
  return (
    <Button style={[ml1]} transparent onPress={() => navigation.toggleDrawer()}>
      <FontAwesome5 name="bars" style={[iconRegular]} />
    </Button>
  );
};

export default HeaderLeft;
