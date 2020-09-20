import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello World !</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
