import React from 'react';
import { View } from 'react-native';

import { DashboardSection } from './sections';

import Styles from './home.style';

export const HomeScreen: React.FunctionComponent = () => {
  return (
    <View style={Styles.container}>
      <DashboardSection />
    </View>
  );
};
