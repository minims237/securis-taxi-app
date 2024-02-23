import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Routes } from '../Constants';
import { RequestFanbusy } from '../Services';

export function useUser() {
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
                
                navigate(Routes.SIGN_IN);
            }
        }
        getCurrentCreator();
    });
    
    return authenticated;
}