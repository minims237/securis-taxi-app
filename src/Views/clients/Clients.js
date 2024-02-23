import { AppLayout } from "../../Layouts";
import "./clients.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dialog } from "primereact/dialog";
import { useDispatch } from "react-redux";
import { setClientData } from "../../features/client.slice";
import { useNavigate } from "react-router-dom";
const Conducteurs = () => {
  const [cleints, setClients] = useState([]);
  const [oneClient, setOneClient] = useState({});
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const data = {
    codeserv: "rechercherlesclients",
  };
  const obtenirClient = (code) => {
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/iutilisateur.php",
        { codeserv: "obtenirunclient", codeclient: code },
        config
      )
      .then((res) => dispatch(setClientData(res.data.body)));
    navigate("/cldetail");
  };
  useEffect(() => {
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/iutilisateur.php",
        data,
        config
      )
      .then((res) => setClients(res.data.body))
      .catch(() => setShow(false));
  });
  return (
    <AppLayout>
      <div className="card pages">
        <div className="card cr">
          <h5>les clients</h5>
        </div>
        <div className="card-header">
          <div className="flex-item">Nom</div>
          <div className="flex-item">Prenom</div>
          <div className="flex-item">Email</div>
          <div className="flex-item">Telephone</div>
        </div>
        {show ? (
          <>
            {cleints.map((c) => (
              <div
                className="card-body"
                onClick={() => obtenirClient(c.codeclient)}
              >
                <div className="flex-item">{c.nomsclient}</div>
                <div className="flex-item">{c.prenomsclient}</div>
                <div className="flex-item">{c.emailclient}</div>
                <div className="flex-item"> {c.numtelclient}</div>
              </div>
            ))}
          </>
        ) : (
          <ProgressSpinner />
        )}
      </div>
    </AppLayout>
  );
};

export default Conducteurs;
