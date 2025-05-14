import { Dimensions, StyleSheet } from 'react-native';

import { BANNER_HEIGHT } from '@/src/constants';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  banner: {
    width: Dimensions.get('screen').width,
    height: BANNER_HEIGHT,
  },
  starRating: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  playButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 44,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  player: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
