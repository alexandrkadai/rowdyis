import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface iFormSet {
  checked: boolean;
}

const initialState: iFormSet = {
  checked: true,
};

const formSlice = createSlice({
  name: 'FormSet',
  initialState,
  reducers: {
    formSet: (state: iFormSet) => {
      state.checked = !state.checked;
    },
  },
});

export const { formSet } = formSlice.actions;

export default formSlice.reducer;