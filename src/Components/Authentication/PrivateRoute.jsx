import React, { useContext } from 'react';
import { AuthContext } from './AuthenticationProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let { loading, loggedInUser } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center h-screen items-center'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (loggedInUser) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;