import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexWrap: 'wrap',
    overflow: 'hidden',
    width: Dimensions.get('screen').width / 3.2,
    gap: 8,
  },
  poster: {
    borderRadius: 16,
    height: Dimensions.get('screen').height / 5,
    width: Dimensions.get('screen').width / 3.2,
  },
  description: {
    gap: 2,
  },
});

export default styles;
