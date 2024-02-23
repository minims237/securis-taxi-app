import { AppLayout } from "../../Layouts";
import "./conducteurs.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dialog } from "primereact/dialog";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCommandeData } from "../../features/commande.slice";
import { setConducteurData } from "../../features/conducteur.slice";
const Conducteurs = () => {
  const [conducteurs, setConducteurs] = useState([]);
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(false);
  const [oneCond, setOneCond] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const data = {
    codeserv: "rechercherlesconducteurs",
  };
  const obtenirConducteur = (code) => {
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/iutilisateur.php",
        { codeserv: "obtenirunconducteur", codeconduc: code },
        config
      )
      .then((res) => dispatch(setConducteurData(res.data.body)));
    navigate("/codetail");
  };
  useEffect(() => {
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/iutilisateur.php",
        data,
        config
      )
      .then((res) => setConducteurs(res.data.body))
      .catch(() => setShow(false));
  });
  return (
    <AppLayout>
      <div className="card pages">
        <div className="card cr">
          <h5>les conducteurs</h5>
        </div>
        <div className="card-header">
          <div className="flex-item">Nom</div>
          <div className="flex-item">Prenom</div>
          <div className="flex-item">Email</div>
          <div className="flex-item">Telephone</div>
        </div>
        {show ? (
          <>
            {conducteurs.map((c) => (
              <div
                className="card-body"
                onClick={() => obtenirConducteur(c.codeconduc)}
              >
                <div className="flex-item">{c.nomsconduc}</div>
                <div className="flex-item">{c.prenomsconduc}</div>
                <div className="flex-item">{c.emailconduc}</div>
                <div className="flex-item"> {c.numtelconduc}</div>
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
