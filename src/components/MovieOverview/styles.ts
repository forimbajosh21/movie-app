import { StyleSheet } from 'react-native';

import { Colors } from '@/src/constants/Colors';

const styles = StyleSheet.create({
  titleContainer: {
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
  },
  indicator: {
    height: 4,
    backgroundColor: Colors.light.highlight.tabUnderline,
  },
  overview: {
    fontSize: 16,
    lineHeight: 16 * 1.6,
  },
});

export default styles;
