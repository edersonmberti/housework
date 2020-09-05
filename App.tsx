import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Box = ({
  backgroundColor = '#F5FFFF',
  scale = 1,
  onDown,
  onUp,
  borderSize,
  leftPosition,
}) => (
  <Animated.View
    style={[
      {
        position: 'absolute',
        left: leftPosition,
        width: screen.width,
        height: screen.height,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor,
        borderRadius: borderSize,
        transform: [{ scale }],
      },
    ]}>
    <Button
      onPress={onDown}
      title="Down"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    <Button
      onPress={onUp}
      title="Up"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </Animated.View>
);

const usePulse = (startDelay = 1800) => {
  const scale = useRef(new Animated.Value(1)).current;
  const borderSize = useRef(new Animated.Value(0)).current;
  const leftPosition = useRef(new Animated.Value(0)).current;

  const down = () => {
    Animated.parallel([
      Animated.timing(scale, { toValue: 0.8 }),
      Animated.timing(borderSize, { toValue: 55 }),
      Animated.timing(leftPosition, { toValue: screen.width - 110 }),
    ]).start();
  };

  const up = () => {
    Animated.parallel([
      Animated.timing(scale, { toValue: 1 }),
      Animated.timing(borderSize, { toValue: 0 }),
      Animated.timing(leftPosition, { toValue: 0 }),
    ]).start();
  };

  return {
    scale,
    borderSize,
    leftPosition,
    onDown: down,
    onUp: up,
  };
};

const App: React.FunctionComponent = () => {
  const { scale, borderSize, onDown, onUp, leftPosition } = usePulse();

  return (
    <View style={Styles.container}>
      <Box
        scale={scale}
        onDown={onDown}
        onUp={onUp}
        borderSize={borderSize}
        leftPosition={leftPosition}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d225f',
  },
  slideViewContainer: {
    position: 'absolute',
    width: screen.width,
    height: screen.height - 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fe',
    left: 40,
    top: 60,
    borderBottomLeftRadius: 45,
    borderTopLeftRadius: 45,
  },
});

export default App;

// Bordas 0 -> 45
// Height screen.height - 120
// Postion left 0 -> screen.width - 50
// Postion top 0 -> 60
