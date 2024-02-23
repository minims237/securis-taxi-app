import { combineSlices, createSlice } from "@reduxjs/toolkit";

export const CommandeSlice = createSlice({
  name: "commande",
  initialState: {
    commande: {},
  },
  reducers: {
    setCommandeData: (state, action) => {
      state.commande = action.payload;
    },
  },
});

export const { setCommandeData } = CommandeSlice.actions;
export default CommandeSlice.reducer;
