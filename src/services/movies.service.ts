import { api } from './api';

import {
  shouldContainTitleAndPoster,
  shouldUpcomingOnly,
} from '@/src/utils/movies';

import { Movie } from '@/src/types/Movie';

interface GetNowPlayingUpcomingTopRatedPopularMoviesResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: 1;
  results: Movie[];
}

interface GetNowPlayingUpcomingTopRatedPopularMoviesParams {
  language?: string;
  page?: number;
  /** ISO-3166-1 code */
  region?: string;
}

const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNowPlaying: build.query<
      GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
      GetNowPlayingUpcomingTopRatedPopularMoviesParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/now_playing?language=${language}&page=${page}&region=${region}`,
        params: {
          page,
        },
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
        meta,
        arg,
      ) {
        const { results } = baseQueryReturnValue;
        return {
          ...baseQueryReturnValue,
          results: results.filter(shouldContainTitleAndPoster),
        };
      },
    }),
    getUpcoming: build.query<
      GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
      GetNowPlayingUpcomingTopRatedPopularMoviesParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/upcoming?language=${language}&page=${page}&region=${region}`,
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
        meta,
        arg,
      ) {
        const { results } = baseQueryReturnValue;
        return {
          ...baseQueryReturnValue,
          results: results
            .filter(shouldUpcomingOnly)
            .filter(shouldContainTitleAndPoster),
        };
      },
    }),
    getTopRated: build.query<
      GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
      GetNowPlayingUpcomingTopRatedPopularMoviesParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/top_rated?language=${language}&page=${page}&region=${region}`,
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
        meta,
        arg,
      ) {
        const { results } = baseQueryReturnValue;
        return {
          ...baseQueryReturnValue,
          results: results.filter(shouldContainTitleAndPoster),
        };
      },
    }),
    getPopular: build.query<
      GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
      GetNowPlayingUpcomingTopRatedPopularMoviesParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/popular?language=${language}&page=${page}&region=${region}`,
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularMoviesResponse,
        meta,
        arg,
      ) {
        const { results } = baseQueryReturnValue;
        return {
          ...baseQueryReturnValue,
          results: results.filter(shouldContainTitleAndPoster),
        };
      },
    }),
  }),
});

export const {
  useGetNowPlayingQuery,
  useLazyGetNowPlayingQuery,
  useGetUpcomingQuery,
  useLazyGetUpcomingQuery,
  useGetTopRatedQuery,
  useLazyGetTopRatedQuery,
  useGetPopularQuery,
  useLazyGetPopularQuery,
} = moviesApi;
export default moviesApi;
