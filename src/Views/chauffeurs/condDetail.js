import { useSelector } from "react-redux";

const CondDetail = () => {
  const oneCond = useSelector((state) => state.conducteur.conducteur);
  return (
    <div className="card dc">
      <div className="card cr">
        <h5>conducteur {oneCond.codeconduc} </h5>
      </div>

      <div className="card-body">
        <div className="flex-item">code utilisateur</div>
        <div className="flex-item">{oneCond.codeutilis}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">nom du conducteur</div>
        <div className="flex-item">{oneCond.nomsconduc}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">telephone du conducteur</div>
        <div className="flex-item">{oneCond.numtelconduc}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">email du conducteur</div>
        <div className="flex-item">{oneCond.emailconduc}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">status du conducteur</div>
        <div className="flex-item">{oneCond.statutconduc}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">disponibilite du conducteur</div>
        <div className="flex-item">{oneCond.dispoconduc}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">code commis</div>
        <div className="flex-item">{oneCond.codecommis}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">nom commis</div>
        <div className="flex-item">{oneCond.nomcommis}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">valeur commis</div>
        <div className="flex-item">{oneCond.valcommis}</div>
      </div>
    </div>
  );
};
export default CondDetail;
