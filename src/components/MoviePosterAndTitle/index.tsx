import { Image } from 'expo-image';
import { View } from 'react-native';

import Text from '@/src/components/Text';

import styles from './styles';

export interface MoviePosterAndTitleProps {
  posterPath: string;
  title: string;
}

const MoviePosterAndTitle: React.FC<MoviePosterAndTitleProps> = ({
  posterPath,
  title,
}) => {
  return (
    <View style={styles.root}>
      <Image
        source={`${process.env.EXPO_PUBLIC_ASSET_URL + posterPath}`}
        contentFit="cover"
        transition={25}
        style={styles.poster}
      />
      <Text
        variant="heading-large"
        numberOfLines={3}
        ellipsizeMode="tail"
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );
};

export default MoviePosterAndTitle;
