import React from 'react';
import {ActivityIndicator} from 'react-native';

import {colors} from '../../config/colors';

export default function LoadingSpinner() {
  return <ActivityIndicator size="large" color={colors['light-black']} />;
}
