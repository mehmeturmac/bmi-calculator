import { createSlice } from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'calculater',
  initialState: {
    bmi: 0,
  },
  reducers: {
    calculate: (state, action) => {
      state.bmi = (action.payload.weight / action.payload.height) * action.payload.height;
    },
  },
});

export const { calculate } = calculateSlice.actions;
export default calculateSlice.reducer;
