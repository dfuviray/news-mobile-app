import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import News from './app/screen/News/News';

const App = () => {
  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <News />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
