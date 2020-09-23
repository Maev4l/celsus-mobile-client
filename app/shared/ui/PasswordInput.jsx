/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { Input, Item } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PasswordInput = ({
  lockIconStyle,
  eyeIconStyle,
  onSubmit,
  style,
  ...rest
}) => {
  const [state, setState] = useState({
    eyeIcon: 'eye-slash',
    hideText: true,
  });

  const handlePressIcon = () => {
    const { hideText } = state;
    setState({
      ...state,
      eyeIcon: hideText ? 'eye' : 'eye-slash',
      hideText: !hideText,
    });
  };

  const { eyeIcon, hideText } = state;
  return (
    <Item style={style}>
      <FontAwesome5 name="lock" style={lockIconStyle} />
      <Input
        secureTextEntry={hideText}
        autoCapitalize="none"
        textContentType="none"
        {...rest}
      />
      <FontAwesome5
        name={eyeIcon}
        onPress={handlePressIcon}
        style={eyeIconStyle}
      />
    </Item>
  );
};

export default PasswordInput;
