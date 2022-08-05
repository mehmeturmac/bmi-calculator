import { configureStore } from '@reduxjs/toolkit';

import calculateSlice from './calculateSlice';

export const store = configureStore({
  reducer: {
    calculator: calculateSlice,
  },
});
