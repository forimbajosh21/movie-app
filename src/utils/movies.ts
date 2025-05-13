import { Movie } from '@/src/types/Movie';

export function shouldContainTitleAndPoster(movie: Movie) {
  return movie.title && movie.poster_path;
}

export function shouldUpcomingOnly(movie: Movie) {
  return movie.release_date && new Date(movie.release_date) > new Date();
}
