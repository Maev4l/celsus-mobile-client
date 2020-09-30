import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';

import styles from '../shared/styles';

const { iconStyle } = StyleSheet.create({
  iconStyle: {
    height: 32,
    width: 32,
  },
});

const SideBarItem = ({ icon, label, destination, navigation, focused }) => {
  const [iconImage, setIconImage] = useState();

  useEffect(() => {
    FontAwesome5.getImageSource(
      icon,
      32,
      '#000',
      FA5Style.regular,
    ).then((source) => setIconImage(source));
  }, []);

  const { flex, pl2, mt2, mb2, flexRow, flexCenter, largeText } = styles;
  const onPress = () => {
    navigation.navigate(destination);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[pl2, mt2, mb2, flex, flexRow, flexCenter]}>
        <Image resizeMode="center" source={iconImage} style={[iconStyle]} />
        <Text style={[largeText, pl2]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SideBarItem;
