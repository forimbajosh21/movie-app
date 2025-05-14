import { Colors } from '@/src/constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get('screen').height,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.background.main,
  },
});

export default styles;
