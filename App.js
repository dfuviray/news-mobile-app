import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';

import NewsStack from './app/navigation/NewsStack';

const App = () => {
  const {container} = styles;

  return (
    <NavigationContainer>
      <SafeAreaView style={container}>
        <NewsStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
