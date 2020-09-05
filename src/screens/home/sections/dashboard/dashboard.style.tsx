import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: screen.width,
    height: screen.height,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FFFF',
  },
});

export default styles;
