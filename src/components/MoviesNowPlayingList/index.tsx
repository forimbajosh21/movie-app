import { View } from 'react-native';

import MovieList from '@/src/components/MovieList';
import Text from '@/src/components/Text';

import { useGetNowPlayingQuery } from '@/src/services/movies.service';

import { Movie } from '@/src/types/Movie';

import styles from './styles';

const MoviesNowPlayingList = () => {
  const { data, isError } = useGetNowPlayingQuery({});

  return (
    <View>
      <Text variant="heading-medium" color="primary" style={styles.title}>
        Now Playing
      </Text>
      <MovieList list={isError ? [] : (data?.results as Movie[])} />
    </View>
  );
};

export default MoviesNowPlayingList;
