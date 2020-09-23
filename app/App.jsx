import React from 'react';
import Amplify from '@aws-amplify/core';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'; // Load FontAwesome5 icons and fonts

import infra from '../infra.json';
import SignIn from './authentication/SignIn';

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
  },
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
