import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Item, Input, Button, Text, Toast } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { readCredentials } from '../shared/secure-storage';
import styles from '../shared/styles';
import { operations } from './duck';
import { PasswordInput, Loading } from '../shared/ui';

const SignIn = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const { signIn } = operations;
  const dispatch = useDispatch();
  const { authenticating, authenticated } = useSelector((store) => {
    return {
      authenticating: store.authn.authenticating,
      authenticated: store.authn.authenticated,
    };
  });

  const { flex, flexContentCenter, flexCenter, p2, mt3, largeText } = styles;

  const handleChange = (prop, value) => {
    setState({ ...state, [prop]: value });
  };

  const login = (username, password) => {
    dispatch(signIn(username, password)).catch((e) => {
      Toast.show({
        type: 'danger',
        duration: 5000,
        text: e.message, // 'Incorrect credentials',
        position: 'top',
        style: { ...mt3 },
      });
    });
  };

  const handleSignIn = () => {
    const { username, password } = state;
    login(username, password);
  };

  useEffect(() => {
    const bootstrap = () => {
      // Read the credentials from the secure storage
      readCredentials().then(({ username, password }) => {
        // Validate them
        if (username && password) {
          setState({ ...state, username, password });
          login(username, password);
        }
      });
    };

    bootstrap();
  }, []);

  const { username, password } = state;

  const disableButton = !username || !password || authenticating;

  return (
    <SafeAreaView style={[flex]}>
      <View style={[flex, p2, flexContentCenter, flexCenter]}>
        {authenticating ? (
          <Loading />
        ) : (
          !authenticated && (
            <>
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
            </>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
