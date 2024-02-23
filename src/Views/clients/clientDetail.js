import { useSelector } from "react-redux";

const ClientDetail = () => {
  const oneClient = useSelector((state) => state.client.client);
  return (
    <div className="card dc">
      <div className="card cr">
        <h5>client {oneClient.codeclient}</h5>
      </div>

      <div className="card-body">
        <div className="flex-item">nom du client</div>
        <div className="flex-item">{oneClient.nomsclient}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">prenom du client</div>
        <div className="flex-item">{oneClient.prenomsclient}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">telephone du client</div>
        <div className="flex-item">{oneClient.numtelclient}</div>
      </div>
      <div className="card-body">
        <div className="flex-item">email du client</div>
        <div className="flex-item">{oneClient.emailclient}</div>
      </div>
    </div>
  );
};

export default ClientDetail;
