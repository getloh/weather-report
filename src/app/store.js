import { configureStore } from '@reduxjs/toolkit';

import inputSlice from '../features/input/inputSlice';
import mainSlice from '../features/main/mainSlice';

export const store = configureStore({
  reducer: {

    input: inputSlice,
    main: mainSlice
  },
});
