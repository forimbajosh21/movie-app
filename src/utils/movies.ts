import { Movie, MovieDetailVideo } from '@/src/types/Movie';

export function shouldContainTitleAndPoster(movie: Movie) {
  return movie.title && movie.poster_path;
}

export function shouldUpcomingOnly(movie: Movie) {
  return movie.release_date && new Date(movie.release_date) > new Date();
}

export function getTrailerUrl(videos: MovieDetailVideo[]) {
  const trailer = videos.filter(
    (video) =>
      video.type === 'Trailer' && video.official && video.site === 'YouTube',
  );

  return trailer.length > 0 ? trailer[0].key : '';
}
