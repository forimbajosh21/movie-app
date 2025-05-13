import {
  combineReducers,
  configureStore,
  PreloadedStateShapeFromReducersMapObject,
} from '@reduxjs/toolkit';

import { api } from '../services/api';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const setupStore = (
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
  if (process.env.NODE_ENV !== 'production' && (module as any)?.hot) {
    (module as any)?.hot.accept('./reducers', () =>
      store.replaceReducer(rootReducer),
    );
  }

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
