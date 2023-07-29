import { createSlice } from '@reduxjs/toolkit';

const initialState = { filterValue: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter: {
      reducer: (state, action) => {
        state.filterValue = action.payload;
      },

      prepare: filterValue => {
        return { payload: filterValue };
      },
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
////////////////////////SELECTORS///////////////////
export const getFilterValue = state => {
  return state.filter.filterValue;
};
