import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { inputValue: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.inputValue = action.payload;
    },
    prepare: inputValue => {
      return {
        payload: inputValue,
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
