import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Item, Input, Button, Text, Toast } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import styles from '../shared/styles';
import { operations } from './duck';
import { PasswordInput } from '../shared/ui';

const { spinner, animation } = StyleSheet.create({
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
    fontSize: 80,
  },
});

const SignIn = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const { signIn } = operations;
  const dispatch = useDispatch();
  const { authenticating } = useSelector((store) => {
    return {
      authenticating: store.authn.authenticating,
    };
  });

  const { flex, flexContentCenter, flexCenter, p2, mt3, largeText } = styles;

  const handleChange = (prop, value) => {
    setState({ ...state, [prop]: value });
  };

  const handleSignIn = () => {
    const { username, password } = state;
    setState({ ...state, loading: true });
    dispatch(signIn(username, password)).catch((e) => {
      Toast.show({
        type: 'danger',
        duration: 5000,
        text: e.message, // 'Incorrect credentials',
      });
    });
  };

  const { username, password } = state;

  const disableButton = !username || !password || authenticating;

  return (
    <SafeAreaView style={[flex]}>
      <View style={[flex, p2, flexContentCenter, flexCenter]}>
        <Item>
          <FontAwesome5 name="user" solid style={[largeText]} />
          <Input
            editable={!authenticating}
            autoCapitalize="none"
            placeholder="Username"
            value={username}
            onChangeText={(value) => handleChange('username', value)}
            textContentType="none"
            autoFocus
            onSubmitEditing={handleSignIn}
          />
        </Item>
        <PasswordInput
          editable={!authenticating}
          placeholder="Password"
          value={password}
          onChangeText={(value) => handleChange('password', value)}
          onSubmitEditing={handleSignIn}
          style={mt3}
          lockIconStyle={largeText}
          eyeIconStyle={largeText}
        />
        <View style={[mt3]}>
          <Button
            disabled={disableButton}
            primary={!disableButton}
            onPress={handleSignIn}
            large>
            <Text>Sign In</Text>
          </Button>
        </View>
        {authenticating && (
          <Animatable.View
            style={animation}
            animation="rotate"
            iterationCount="infinite"
            easing="linear">
            <FontAwesome5 name="spinner" style={spinner} />
          </Animatable.View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
