import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';

import Text from '@/src/components/Text';

import styles from './styles';

export interface MovieCardProps {
  id: number;
  title: string;
  releaseDate: string;
  posterPath: string;
  backdropPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  releaseDate,
  posterPath,
  backdropPath,
}) => {
  const router = useRouter();

  const date = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  function handlePress() {
    router.navigate(
      `/${id}?title=${title}&releaseDate=${releaseDate}&posterPath=${posterPath}&backdropPath=${backdropPath}`,
    );
  }

  return (
    <Pressable style={styles.root} onPress={handlePress}>
      <Image
        source={`${process.env.EXPO_PUBLIC_ASSET_URL + posterPath}`}
        contentFit="cover"
        transition={350}
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
    </Pressable>
  );
};

export default MovieCard;
