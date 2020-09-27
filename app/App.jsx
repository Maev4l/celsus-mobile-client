import React from 'react';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'; // Load FontAwesome5 icons and fonts

import infra from '../infra.json';
import SignIn from './authentication/SignIn';
import Biometrics from './authentication/Biometrics';
import MainNavigator from './Navigator';

// ---> Load FontAwesome5 icons and fonts
FontAwesomeIcon.getStyledIconSet('brand').loadFont();
FontAwesomeIcon.getStyledIconSet('light').loadFont();
FontAwesomeIcon.getStyledIconSet('regular').loadFont();
FontAwesomeIcon.getStyledIconSet('solid').loadFont();
// <--- Load FontAwesome5 icons and fonts

Amplify.configure({
  Auth: {
    identityPoolId: infra.userIdentityPool,
    userPoolId: infra.userPoolId,
    region: infra.region,
    userPoolWebClientId: infra.userPoolClient,
  },
  API: {
    graphql_endpoint: 'https://api-celsus.isnan.eu/graphql',
    graphql_headers: async () => {
      const currentSession = await Auth.currentSession();
      return { Authorization: currentSession.getIdToken().getJwtToken() };
    },
  },
});

const Stack = createStackNavigator();

const App = () => {
  const { authenticated } = useSelector((store) => ({
    authenticated: store.authn.authenticated,
  }));

  return (
    <SafeAreaProvider>
      <Root>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ animationEnabled: false }}>
            {authenticated ? (
              <Stack.Screen
                name="MainNavigator"
                component={MainNavigator}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Biometrics"
                  component={Biometrics}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignIn"
                  component={SignIn}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </SafeAreaProvider>
  );
};

export default App;
