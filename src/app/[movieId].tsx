import { useHeaderHeight } from '@react-navigation/elements';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';

import MovieBanner from '@/src/components/MovieBanner';
import MovieMetaData from '@/src/components/MovieMetaData';
import MovieOverview from '@/src/components/MovieOverview';
import PageContainer from '@/src/components/PageContainer';

import {
  useGetDetailsQuery,
  useGetVideosQuery,
} from '@/src/services/movies.service';

import { BANNER_HEIGHT } from '@/src/constants';
import { getTrailerUrl } from '@/src/utils/movies';
import MoviePosterAndTitle from '../components/MoviePosterAndTitle';

const MovieId = () => {
  const headerHeight = useHeaderHeight() + 10;

  const { movieId, title, releaseDate, posterPath, backdropPath } =
    useLocalSearchParams<{
      movieId: string;
      title: string;
      releaseDate: string;
      posterPath: string;
      backdropPath: string;
    }>();

  const { data } = useGetDetailsQuery(Number(movieId));
  const { data: videoData } = useGetVideosQuery(Number(movieId));

  const videoSource = getTrailerUrl(videoData?.results || []);

  const contentStyle = {
    marginTop: BANNER_HEIGHT - headerHeight - 95,
    height: Dimensions.get('screen').height - (BANNER_HEIGHT - headerHeight),
  };

  return (
    <PageContainer style={styles.root}>
      <MovieBanner
        backdropPath={backdropPath}
        rating={data?.vote_average || 0}
        videoSource={videoSource}
      />
      <View style={StyleSheet.flatten([styles.content, contentStyle])}>
        <MoviePosterAndTitle posterPath={posterPath} title={title} />
        <MovieMetaData
          releaseDate={releaseDate}
          runtime={data?.runtime || 0}
          genres={data?.genres || []}
          style={styles.root}
        />
        <MovieOverview
          overview={data?.overview || ''}
          style={styles.overview}
        />
      </View>
    </PageContainer>
  );
};

export default MovieId;

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    paddingHorizontal: 32,
  },
  content: {
    gap: 16,
  },
  overview: {
    paddingTop: 16,
  },
});
