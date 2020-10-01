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

const SideBarItem = ({
  icon,
  label,
  /* focused, */
  style,
  onPress,
}) => {
  const [iconImage, setIconImage] = useState();

  useEffect(() => {
    FontAwesome5.getImageSource(
      icon,
      32,
      '#000',
      FA5Style.regular,
    ).then((source) => setIconImage(source));
  }, []);

  const { pl2, flex, flexRow, flexCenter, largeText } = styles;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[flex, flexRow, flexCenter, ...style]}>
        <Image resizeMode="center" source={iconImage} style={[iconStyle]} />
        <Text style={[largeText, pl2]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SideBarItem;
