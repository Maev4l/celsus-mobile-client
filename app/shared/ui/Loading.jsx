import React from 'react';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const fontSizes = Object.freeze({
  large: 80,
  medium: 40,
  small: 20,
});

const createStyle = (size) => {
  let fontSize = fontSizes[size];
  if (!fontSize) {
    fontSize = fontSizes.medium;
  }

  const style = StyleSheet.create({
    animation: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    spinner: {
      fontSize: size === 'large' ? 80 : 40,
    },
  });

  return style;
};

const Loading = ({ size = 'large' }) => {
  const { spinner, animation } = createStyle(size);

  return (
    <Animatable.View
      style={animation}
      animation="rotate"
      iterationCount="infinite"
      easing="linear">
      <FontAwesome5 name="spinner" style={spinner} />
    </Animatable.View>
  );
};

export default Loading;
