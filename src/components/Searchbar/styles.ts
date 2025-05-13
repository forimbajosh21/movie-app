import { Colors } from '@/src/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: 42,
    borderRadius: 16,
    backgroundColor: Colors.light.highlight.tabUnderline,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  input: {
    color: Colors.light.text.primary,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
});

export default styles;
