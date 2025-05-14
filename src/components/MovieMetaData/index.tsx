import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Text from '@/src/components/Text';

import { Colors } from '@/src/constants/Colors';
import { MovieDetail } from '@/src/types/Movie';

import styles from './styles';

export interface MovieMetaDataProps {
  releaseDate: MovieDetail['release_date'];
  runtime: MovieDetail['runtime'];
  genres: MovieDetail['genres'];
  style?: StyleProp<ViewStyle>;
}

const MovieMetaData: React.FC<MovieMetaDataProps> = ({
  releaseDate,
  runtime,
  genres,
  style,
}) => {
  const year = new Date(releaseDate).getFullYear();

  const genre = genres.reduce((acc, curr) => {
    return curr.id < acc.id ? curr : acc;
  }, genres[0] || undefined);

  return (
    <View style={StyleSheet.flatten([styles.root, style])}>
      <View style={styles.item}>
        <Octicons
          name="calendar"
          size={11}
          color={Colors.light.text.secondary}
        />
        <Text color="secondary" style={styles.text}>
          {year}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.item}>
        <AntDesign
          name="clockcircleo"
          size={11}
          color={Colors.light.text.secondary}
        />
        <Text color="secondary" style={styles.text}>
          {runtime} minutes
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.item}>
        <MaterialCommunityIcons
          name="movie-roll"
          size={11}
          color={Colors.light.text.secondary}
        />
        <Text color="secondary" style={styles.text}>
          {genre?.name}
        </Text>
      </View>
    </View>
  );
};

export default MovieMetaData;
