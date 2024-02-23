import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Error404View, HomeView } from "../Views";
import { AuthGuard } from "../Utils";
import Conducteurs from "../Views/chauffeurs/Conducteurs.js";
import Commandes from "../Views/commandes/Commandes.js";
import Clients from "../Views/clients/Clients.js";
import Login from "../Views/login/Login.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error404View />}>
      <Route path="/" element={<AuthGuard props={<HomeView />} />} />
      <Route path="/conducteurs" element={<Conducteurs />} />
      <Route path="/commandes" element={<Commandes />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404View />} />
    </Route>
  )
);

export default router;
