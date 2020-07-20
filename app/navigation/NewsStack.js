import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {colors} from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import News from '../screen/News/News';
const NewsStack = createStackNavigator();

function NewStack() {
  return (
    <NewsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerRight: ({tintColor}) => (
          <Icon name="search" size={25} color={tintColor} />
        ),
        headerLeft: ({tintColor}) => (
          <Icon name="menu" size={30} color={tintColor} />
        ),
        headerTitleAlign: 'center',
      }}>
      <NewsStack.Screen name="News" component={News} />
    </NewsStack.Navigator>
  );
}

export default NewStack;
