import { AppLayout } from "../../Layouts";
import "./commandes.css";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { useDispatch } from "react-redux";
import { setCommandeData } from "../../features/commande.slice";
import { useNavigate } from "react-router-dom";
const Commandes = () => {
  const [visible, setVisible] = useState(false);
  const [commandes, setCommandes] = useState([]);
  const [oneCom, setOneCom] = useState({});
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const data = {
    codeserv: "rechercherlescommandes",
  };

  useEffect(() => {
    axios
      .post("https://metiersecuris.bsiges.com/akam/icommande.php", data, config)
      .then((res) => setCommandes(res.data.body))
      .catch(() => setShow(false));
  });
  const obtenirCommande = (code) => {
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/icommande.php",
        { codeserv: "obtenirunecommande", codecmde: code },
        config
      )
      .then((res) => dispatch(setCommandeData(res.data.body)));
    navigate("/cdetail");
  };
  return (
    <AppLayout>
      <div className="card pages">
        <div className="card cr">
          <h5>les commandes</h5>
        </div>
        <div className="card-header">
          <div className="flex-item">Conducteur</div>
          <div className="flex-item">Type commande</div>
          <div className="flex-item">Mode de paiement</div>
          <div className="flex-item">Distance</div>
        </div>
        {show ? (
          <>
            {commandes.map((c) => (
              <div
                className="card-body"
                onClick={() => obtenirCommande(c.codecmde)}
              >
                <div className="flex-item">{c.nomsutilisconduc}</div>
                <div className="flex-item">{c.typcmde}</div>
                <div className="flex-item">{c.modpaicmde}</div>
                <div className="flex-item"> {c.distanceitine}</div>
              </div>
            ))}
          </>
        ) : (
          <ProgressSpinner />
        )}
      </div>
      {/* <Dialog
        header="Details"
        visible={visible}
        maximizable
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        className="dialog"
      >
        <div className="card-body">
          <div className="flex-item">code commande</div>
          <div className="flex-item">{oneCom.codecmde}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">code du client</div>
          <div className="flex-item">{oneCom.codeclient}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">nom du client</div>
          <div className="flex-item">{oneCom.nomsutilisclient}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">telephone du client</div>
          <div className="flex-item">{oneCom.numtelutilisclient}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">email du client</div>
          <div className="flex-item">{oneCom.emailutilisclient}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">longitudeadrenlev</div>
          <div className="flex-item">{oneCom.longitudeadrenlev}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">latitudeadrenlev</div>
          <div className="flex-item">{oneCom.latitudeadrenlev}</div>
        </div>

        <div className="card-body">
          <div className="flex-item">libadrenlev</div>
          <div className="flex-item">{oneCom.libadrenlev}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">longitudeadrlivr</div>
          <div className="flex-item">{oneCom.longitudeadrlivr}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">latitudeadrlivr</div>
          <div className="flex-item">{oneCom.latitudeadrlivr}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">libadrlivr</div>
          <div className="flex-item">{oneCom.libadrlivr}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">dureeitine</div>
          <div className="flex-item">{oneCom.dureeitine}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">distanceitine</div>
          <div className="flex-item">{oneCom.distanceitine}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">type de commande</div>
          <div className="flex-item">{oneCom.typcmde}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">mode de paiement</div>
          <div className="flex-item">{oneCom.modpaicmde}</div>
        </div>

        <div className="card-body">
          <div className="flex-item">devisecmde</div>
          <div className="flex-item">{oneCom.devisecmde}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">statutcmde</div>
          <div className="flex-item">{oneCom.d}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">type de commande</div>
          <div className="flex-item">{oneCom.typcmde}</div>
        </div>
        <div className="card-body">
          <div className="flex-item">mode de paiement</div>
          <div className="flex-item">{oneCom.modpaicmde}</div>
        </div>
      </Dialog> */}
    </AppLayout>
  );
};

export default Commandes;
