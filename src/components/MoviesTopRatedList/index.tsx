import { View } from 'react-native';

import MovieList from '@/src/components/MovieList';
import Text from '@/src/components/Text';

import { useGetTopRatedQuery } from '@/src/services/movies.service';

import { Movie } from '@/src/types/Movie';

import styles from './styles';

const MoviesTopRatedList = () => {
  const { data, isError } = useGetTopRatedQuery({});

  if (data?.results.length === 0) {
    return null;
  }

  return (
    <View>
      <Text variant="heading-medium" color="primary" style={styles.title}>
        Top Rated
      </Text>
      <MovieList list={isError ? [] : (data?.results as Movie[])} />
    </View>
  );
};

export default MoviesTopRatedList;
