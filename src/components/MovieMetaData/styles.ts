import { StyleSheet } from 'react-native';

import { Colors } from '@/src/constants/Colors';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontFamily: 'Montserrat_500Medium',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.light.text.primary,
  },
});

export default styles;
