import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    client: {},
  },
  reducers: {
    setClientData: (state, action) => {
      state.client = action.payload;
    },
  },
});

export const { setClientData } = clientSlice.actions;
export default clientSlice.reducer;
