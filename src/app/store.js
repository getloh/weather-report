import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import inputSlice from '../features/input/inputSlice';
import mainSlice from '../features/main/mainSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: inputSlice,
    main: mainSlice
  },
});
