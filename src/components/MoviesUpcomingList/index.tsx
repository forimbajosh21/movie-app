import { View } from 'react-native';

import MovieList from '@/src/components/MovieList';
import Text from '@/src/components/Text';

import { useGetUpcomingQuery } from '@/src/services/movies.service';

import { Movie } from '@/src/types/Movie';

import styles from './styles';

const MoviesUpcomingList = () => {
  const { data, isError } = useGetUpcomingQuery({});

  if (data?.results.length === 0) {
    return null;
  }

  return (
    <View>
      <Text variant="heading-medium" color="primary" style={styles.title}>
        Upcoming
      </Text>
      <MovieList list={isError ? [] : (data?.results as Movie[])} />
    </View>
  );
};

export default MoviesUpcomingList;
