import { useEffect, useRef, useState } from "react";
import { AppLayout } from "../../Layouts";
import axios from "axios";
import { ProgressSpinner } from "primereact/progressspinner";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import mapboxgl from "mapbox-gl";

const HomeView = () => {
  const [cleints, setClients] = useState([]);
  const [commandes, setCommandes] = useState([]);
  const [conducteurs, setConducteurs] = useState([]);
  const [show, setShow] = useState(true);
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const data = {
    codeserv: "rechercherlesclients",
  };
  const data1 = {
    codeserv: "rechercherlescommandes",
  };
  const data2 = {
    codeserv: "rechercherlesclients",
  };
  const mapContainerRef = useRef(null);
  useEffect(() => {
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/iutilisateur.php",
        data,
        config
      )
      .then((res) => setClients(res.data.body))
      .catch(() => setShow(false));
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/icommande.php",
        data1,
        config
      )
      .then((res) => setCommandes(res.data.body))
      .catch(() => setShow(false));
    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/iutilisateur.php",
        data2,
        config
      )
      .then((res) => setConducteurs(res.data.body))
      .catch(() => setShow(false));
  });

  const apiKey = "AIzaSyAzJezUal0wAlc7O-JE_gXmLGp7vApZ7t8";

  return (
    <AppLayout>
      <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src="img/carousel-1.jpg" alt="Image1" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <h1 class="display-2 text-light mb-5 animated slideInDown">
                        arriver a destination en un clic
                      </h1>
                      <a href="/home" class="btn btn-primary py-sm-3 px-sm-5">
                        commander
                      </a>
                      <a
                        href="/home"
                        class="btn btn-light py-sm-3 px-sm-5 ms-3"
                      >
                        consulter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src="img/carousel-2.jpg" alt="Image2" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <h1 class="display-2 text-light mb-5 animated slideInDown">
                        arrive at your destination with a single click
                      </h1>
                      <a href="/home" class="btn btn-primary py-sm-3 px-sm-5">
                        Order
                      </a>
                      <a
                        href="/home"
                        class="btn btn-light py-sm-3 px-sm-5 ms-3"
                      >
                        Consult
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container-fluid facts py-5 pt-lg-0">
        <div class="container py-5 pt-lg-0">
          <div class="row gx-0">
            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div
                class="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: "150px" }}
              >
                <div class="d-flex">
                  <div class="flex-shrink-0 btn-lg-square bg-primary">
                    <i class="fa fa-file-alt text-white"></i>
                  </div>
                  <div class="ps-4">
                    <h5>Commandes </h5>
                    {show ? (
                      <span>{commandes.length} </span>
                    ) : (
                      <ProgressSpinner
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div
                class="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: "150px" }}
              >
                <div class="d-flex">
                  <div class="flex-shrink-0 btn-lg-square bg-primary">
                    <i class="fa fa-users text-white"></i>
                  </div>
                  <div class="ps-4">
                    <h5>Clients</h5>
                    {show ? (
                      <span>{cleints.length}</span>
                    ) : (
                      <ProgressSpinner
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div
                class="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: "150px" }}
              >
                <div class="d-flex">
                  <div class="flex-shrink-0 btn-lg-square bg-primary">
                    <i class="fa fa-car text-white"></i>
                  </div>
                  <div class="ps-4">
                    <h5>Conducteur</h5>
                    {show ? (
                      <span>{conducteurs.length}</span>
                    ) : (
                      <ProgressSpinner
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeView;
