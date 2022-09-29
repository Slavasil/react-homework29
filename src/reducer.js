import { createSlice } from '@reduxjs/toolkit';

let factCountSlice = createSlice({
  name: 'factCount',
  initialState: 0,
  reducers: {
    setCount: (state, action) => {
      return action.payload;
    }
  }
});

export default factCountSlice.reducer;
export const { setCount } = factCountSlice.actions;
