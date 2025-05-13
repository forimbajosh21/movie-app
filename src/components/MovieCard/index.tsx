import { Image, View } from 'react-native';

import Text from '@/src/components/Text';

import styles from './styles';

export interface MovieCardProps {
  title: string;
  releaseDate: string;
  posterPath: string;
  backdropPath?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  releaseDate,
  posterPath,
  backdropPath,
}) => {
  const date = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.root}>
      <Image
        source={{ uri: process.env.EXPO_PUBLIC_ASSET_URL + posterPath }}
        resizeMode="cover"
        style={styles.poster}
      />
      <View style={styles.description}>
        <Text
          variant="body"
          color="primary"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Text variant="body" color="secondary">
          {date}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;
