import { createSlice } from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'calculator',
  initialState: {
    bmi: 0,
    history: JSON.parse(localStorage.getItem('bmi')) || [],
  },
  reducers: {
    calculate: (state, action) => {
      state.bmi = (action.payload.weight / (action.payload.height * action.payload.height)).toFixed(1);
      state.history.push(state.bmi);
      localStorage.setItem('bmi', JSON.stringify([...state.history]));
    },
    clearHistory: (state) => {
      state.bmi = 0;
      state.history = [];
      localStorage.removeItem('bmi');
    },
  },
});

export const { calculate, clearHistory } = calculateSlice.actions;
export default calculateSlice.reducer;
