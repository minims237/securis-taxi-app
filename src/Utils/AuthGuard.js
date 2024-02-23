import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RequestFanbusy } from "../Services";


const AuthGuard = ({ props }) => {
    // const access_token = useSelector((state) => state.users.access_token);
    // const authenticated = useSelector((state) => state.users.authenticated);

    // if (authenticated && access_token !== "") {
    //     if (props.type.name === "LoginView" || props.type.name === "SignupFormView") {
    //         return <Navigate to="/" replace={false} />;
    //     } else {
    //         return props;
    //     }
    // } else {
    //     if (props.type.name === "SignupFormView") {
    //         return <SignupFormView />;
    //     } else {
    //         return <LoginView />;
    //     }
    // }

    return props;
};

const useUser = () => {
    const users = useSelector(state => state.users);
    const [authenticated, setAuthenticated] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        async function getCurrentCreator() {
            let response = RequestFanbusy('auth/me/', 'GET', '', users.access_token);
            if (response.status === 200) {
                // TODO: dispach to redux
                setAuthenticated(true);
            }
            else if (response.status === 401) {
                setAuthenticated(false);

                navigate('/');
            }
        }
        getCurrentCreator();
    });

    return authenticated;
};
export { AuthGuard, useUser };