import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const menu = [
    { name: "Acceuil", url: "/" },
    { name: "Conducteurs", url: "/conducteurs" },
    { name: "Commandes", url: "/commandes" },
    { name: "Clients", url: "/clients" },
  ];
  useEffect(() => {
    console.log(user);
  });
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <a
        href="/"
        className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
      >
        <h2 className="m-0">
          <i className="fa fa-car text-primary me-2"></i>TAXI
        </h2>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        {user === null ? (
          <div className="navbar-nav ms-auto p-4 p-lg-0"></div>
        ) : (
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {menu.map((m) => (
              <NavLink
                to={m.url}
                className={({ isActive }) =>
                  isActive ? "nav-item nav-link active" : "nav-item nav-link"
                }
              >
                {m.name}
              </NavLink>
            ))}
          </div>
        )}
        <div>
          <button
            onClick={() => navigate("/login")}
            className="nav-item nav-link"
          >
            connexion
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavLayout;
