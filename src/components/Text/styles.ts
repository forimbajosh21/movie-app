import { Colors } from '@/src/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  'heading-large': {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
  },
  'heading-medium': {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  body: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },

  primary: {
    color: Colors.light.text.primary,
  },
  secondary: {
    color: Colors.light.text.secondary,
  },
});

export default styles;
