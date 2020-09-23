import React, { useState } from 'react';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Item, Input, Button, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../shared/styles';

import { PasswordInput } from '../shared/ui';

const SignIn = () => {
  const [state, setState] = useState({
    loading: false,
    username: '',
    password: '',
  });

  const { flex, flexContentCenter, flexCenter, p2, mt3, largeText } = styles;

  const handleChange = (prop, value) => {
    setState({ ...state, [prop]: value });
  };

  const handleSignIn = () => {};

  const { loading, username, password } = state;

  const disableButton = !username || !password || loading;

  return (
    <SafeAreaView style={[flex]}>
      <View style={[flex, p2, flexContentCenter, flexCenter]}>
        <Item>
          <FontAwesome5 name="user" solid style={[largeText]} />
          <Input
            editable={!loading}
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
          editable={!loading}
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
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
