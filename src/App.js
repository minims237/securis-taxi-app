import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./Navigation";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import { Error404View, HomeView } from "./Views";
import { AuthGuard } from "./Utils";
import Conducteurs from "./Views/chauffeurs/Conducteurs";
import Commandes from "./Views/commandes/Commandes";
import Login from "./Views/login/Login";
import Clients from "./Views/clients/Clients";
import ComDetail from "./Views/commandes/comDetail";
import ClientDetail from "./Views/clients/clientDetail";
import CondDetail from "./Views/chauffeurs/condDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<Error404View />}>
          <Route path="/" element={<AuthGuard props={<HomeView />} />} />
          <Route path="/conducteurs" element={<Conducteurs />}>
            <Route path="/" element={<Conducteurs />} />
            <Route path="/codetail" element={<CondDetail />} />
          </Route>

          <Route path="/commandes" element={<Commandes />} />
          <Route path="/cdetail" element={<ComDetail />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/cldetail" element={<ClientDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
