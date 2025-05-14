import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    overflow: 'hidden',
    columnGap: 16,
  },
  poster: {
    height: 180,
    width: 120,
    borderRadius: 16,
  },
  title: {
    paddingTop: 111,
    fontSize: 22,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
});

export default styles;
