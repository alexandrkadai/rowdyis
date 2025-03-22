import { configureStore } from '@reduxjs/toolkit';
import formSetReducer from './formsSlice';
// ...

export const store = configureStore({
  reducer: {
    formSet: formSetReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
