import { api } from './api';

import {
  shouldContainTitleAndPoster,
  shouldUpcomingOnly,
} from '@/src/utils/movies';

import { Movie, MovieDetail, MovieDetailVideo } from '@/src/types/Movie';

interface GetNowPlayingUpcomingTopRatedPopularResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: 1;
  results: Movie[];
}

interface GetNowPlayingUpcomingTopRatedPopularParams {
  language?: string;
  page?: number;
  /** ISO-3166-1 code */
  region?: string;
}

interface GetVideosResponse {
  id: number;
  results: MovieDetailVideo[];
}

const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNowPlaying: build.query<
      GetNowPlayingUpcomingTopRatedPopularResponse,
      GetNowPlayingUpcomingTopRatedPopularParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/now_playing?language=${language}&page=${page}&region=${region}`,
        params: {
          page,
        },
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularResponse,
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
      GetNowPlayingUpcomingTopRatedPopularResponse,
      GetNowPlayingUpcomingTopRatedPopularParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/upcoming?language=${language}&page=${page}&region=${region}`,
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularResponse,
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
      GetNowPlayingUpcomingTopRatedPopularResponse,
      GetNowPlayingUpcomingTopRatedPopularParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/top_rated?language=${language}&page=${page}&region=${region}`,
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularResponse,
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
      GetNowPlayingUpcomingTopRatedPopularResponse,
      GetNowPlayingUpcomingTopRatedPopularParams
    >({
      query: ({ language = 'en-US', page = 1, region = 'PH' }) => ({
        url: `/3/movie/popular?language=${language}&page=${page}&region=${region}`,
      }),
      transformResponse(
        baseQueryReturnValue: GetNowPlayingUpcomingTopRatedPopularResponse,
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
    getDetails: build.query<MovieDetail, number>({
      query: (id, language = 'en-US') => ({
        url: `/3/movie/${id}?language=${language}`,
      }),
    }),
    getVideos: build.query<GetVideosResponse, number>({
      query: (id, language = 'en-US') => ({
        url: `/3/movie/${id}/videos`,
      }),
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
  useGetDetailsQuery,
  useLazyGetDetailsQuery,
  useGetVideosQuery,
  useLazyGetVideosQuery,
} = moviesApi;
export default moviesApi;
