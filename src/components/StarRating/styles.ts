import { StyleSheet } from 'react-native';

import { Colors } from '@/src/constants/Colors';

const styles = StyleSheet.create({
  root: {
    padding: 4,
    backgroundColor: 'rgba(37, 40, 54, 0.68)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    gap: 4,
  },
  rating: {
    fontSize: 12,
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.light.highlight.star,
  },
});

export default styles;
