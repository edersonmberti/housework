import { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

interface DashboardAnimations {
  left: Animated.Value;
  scale: Animated.Value;
  borderRadius: Animated.Value;
  onHide: () => void;
  onShow: () => void;
}

const screen = Dimensions.get('screen');

const useSlide = (): DashboardAnimations => {
  const left = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const borderRadius = useRef(new Animated.Value(0)).current;

  const useNativeDriver = false;
  const duration = 600;

  const onHide = () => {
    Animated.parallel([
      Animated.timing(scale, { toValue: 0.8, useNativeDriver, duration }),
      Animated.timing(borderRadius, { toValue: 55, useNativeDriver, duration }),
      Animated.timing(left, {
        toValue: screen.width - 100,
        useNativeDriver,
        duration,
      }),
    ]).start();
  };

  const onShow = () => {
    Animated.parallel([
      Animated.timing(scale, { toValue: 1, useNativeDriver, duration }),
      Animated.timing(borderRadius, { toValue: 0, useNativeDriver, duration }),
      Animated.timing(left, { toValue: 0, useNativeDriver, duration }),
    ]).start();
  };

  return {
    scale,
    borderRadius,
    left,
    onHide,
    onShow,
  };
};

export { useSlide };
