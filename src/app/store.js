import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "../features/client.slice";
import commandeSlice from "../features/commande.slice";
import conducteurSlice from "../features/conducteur.slice";
import userSlice from "../features/user.slice";

export default configureStore({
  reducer: {
    client: clientSlice,
    commande: commandeSlice,
    conducteur: conducteurSlice,
    user: userSlice,
  },
});
