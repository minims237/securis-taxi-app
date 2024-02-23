import { createSlice } from "@reduxjs/toolkit";

export const conducteurSlice = createSlice({
  name: "conducteur",
  initialState: {
    conducteur: {},
  },
  reducers: {
    setConducteurData: (state, action) => {
      state.conducteur = action.payload;
    },
  },
});
export const { setConducteurData } = conducteurSlice.actions;
export default conducteurSlice.reducer;
