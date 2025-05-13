import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: String(process.env.EXPO_PUBLIC_API_URL),
  prepareHeaders: (headers) => {
    headers.set('Accept', 'application/json');
    headers.set('Authorization', `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`);
    return headers;
  },
});

export const api = createApi({
  baseQuery,
  reducerPath: 'api',
  tagTypes: [],
  endpoints: () => ({}),
});
