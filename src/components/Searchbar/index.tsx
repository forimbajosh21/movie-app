import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import styles from './styles';

export type SearchBarProps = Omit<
  TextInputProps,
  'returnKeyType' | 'placeholder' | 'placeholderTextColor'
>;

const SearchBar: React.FC<SearchBarProps> = ({ style, ...props }) => {
  return (
    <View style={styles.root}>
      <TextInput
        returnKeyType="search"
        placeholder="Search"
        placeholderTextColor={Colors.light.search.placeholderText}
        style={StyleSheet.flatten([styles.input, style])}
        {...props}
      />
    </View>
  );
};

export default SearchBar;
