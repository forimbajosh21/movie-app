import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Text from '@/src/components/Text';

import { Colors } from '@/src/constants/Colors';

import styles from './styles';

export interface StarRatingProps {
  rating?: number;
  style?: StyleProp<ViewStyle>;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, style }) => {
  return (
    <View style={StyleSheet.flatten([styles.root, style])}>
      <AntDesign name="staro" size={12} color={Colors.light.highlight.star} />
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
};

export default StarRating;
