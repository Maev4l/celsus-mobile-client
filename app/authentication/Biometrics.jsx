import React, { useEffect } from 'react';
import TouchID from 'react-native-touch-id';
import { useDispatch } from 'react-redux';
import { Text } from 'native-base';

import { operations } from './duck';
import { readCredentials, resetCredentials } from '../shared/secure-storage';

const Biometrics = ({ navigation }) => {
  const { signIn } = operations;
  const dispatch = useDispatch();
  useEffect(() => {
    TouchID.isSupported()
      .then(() => {
        TouchID.authenticate('to demo this react-native component')
          .then(() => {
            // TouchID authentication successful, fetch the credentials from the secure storage
            readCredentials().then((credentials) => {
              if (credentials) {
                // Credentials has been saved previously
                const { username, password } = credentials;
                dispatch(signIn(username, password)).catch(() => {
                  // Login failed with the persisted credentials, navigate to the
                  // signin screen
                  navigation.navigate('SignIn');
                });
              } else {
                // No credentials has been save previously
                navigation.navigate('SignIn');
              }
            });
          })
          .catch(() => {
            // TouchID recognition failed:
            // - user cancelled TouchID,
            // - or biometrics prints not enrolled
            resetCredentials().then(() => navigation.navigate('SignIn'));
          });
      })
      .catch(() => {
        // Touch ID not supported or not activated on the device
        navigation.navigate('SignIn');
      });
  }, []);

  return <Text>Biometrics</Text>;
};

export default Biometrics;
