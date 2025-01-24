import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  status: string;
  gender: string;
}

const initialState: FilterState = {
  status: '',
  gender: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
  },
});

export const { setStatus, setGender } = filterSlice.actions;
export default filterSlice.reducer;
