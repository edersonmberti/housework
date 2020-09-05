import React from 'react';
import { Button, Animated } from 'react-native';

import { useSlide } from './dashboard.animation';

import Styles from './dashboard.style';

export const DashboardSection: React.FunctionComponent = () => {
  const { onHide, onShow, scale, borderRadius, left } = useSlide();

  const animatedStyle = {
    transform: [{ scale }],
    borderRadius,
    left,
  };

  return (
    <Animated.View style={[Styles.container, animatedStyle]}>
      <Button onPress={onHide} title="Down" color="#841584" />
      <Button onPress={onShow} title="Up" color="#841584" />
    </Animated.View>
  );
};
