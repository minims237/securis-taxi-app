import { useSelector } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const ComDetail = (props) => {
  const oneCom = useSelector((state) => state.commande.commande);
  return (
    <div className="card  dc">
      <div className="card cr">
        <h5>commande {oneCom.codecmde}</h5>
      </div>
      <div
        style={{
          height: "200px",
          width: "auto",
          position: "relative",
          margin: 10,
        }}
      >
        <Map
          google={props.google}
          zoom={14}
          style={{
            width: "auto",
            height: "200px",
            position: "relative",
          }}
          initialCenter={{
            lat: oneCom.latitudeadrenlev,
            lng: oneCom.longitudeadrenlev,
          }}
        >
          <Marker name={"Current location"} />

          <InfoWindow>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
          </InfoWindow>
        </Map>
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
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyAzJezUal0wAlc7O-JE_gXmLGp7vApZ7t8",
})(ComDetail);
