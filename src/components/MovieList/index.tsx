import { FlatList, View } from 'react-native';

import Text from '@/src/components/Text';

import { Movie } from '@/src/types/Movie';
import MovieCard from '../MovieCard';

export interface MovieListProps {
  list: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ list }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          id={item.id}
          title={item.title}
          releaseDate={item.release_date}
          posterPath={item.poster_path}
          backdropPath={item.backdrop_path}
        />
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            width: 24,
          }}
        />
      )}
      ListEmptyComponent={() => (
        <Text variant="body" color="secondary">
          No movies found
        </Text>
      )}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      style={{
        marginTop: 8,
      }}
    />
  );
};

export default MovieList;
