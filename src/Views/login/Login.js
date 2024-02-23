import { useState } from "react";
import "./login.css";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../features/user.slice";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, setLogin] = useState("");
  const [mdp, setMdp] = useState("");
  const dispatch = useDispatch();

  const navi = (e) => {
    dispatch(setUserData(e));
    navigate("/");
  };
  const connexion = (login, mdp) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const data = {
      codeserv: "rechercherlescommandes",
    };

    axios
      .post(
        "https://metiersecuris.bsiges.com/akam/isecurite.php",
        {
          codeserv: "connecterweb",
          login: login,
          mdp: mdp,
          term: "mobilandroid1",
          adrip: "192.168.0.2",
        },
        config
      )
      .then((res) => navi(res.data.body));
  };
  return (
    <div className="login">
      <div className="login-ctn">
        <div className="login-title">
          <h5>connexion</h5>
        </div>
        <input
          type="text"
          placeholder="login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="mot de passe"
          onChange={(e) => setMdp(e.target.value)}
        />
        <button onClick={() => connexion(login, mdp)}>se connecter</button>
      </div>
    </div>
  );
};
export default Login;
