import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import notification from '../services/Notification';

type AuthRouteProps = {
  children: React.ReactElement;
};

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const location = useLocation();

  if (isAuthenticated) {
    return children;
  } else {
    notification.info('Играта е достъпна само за регистрирани потребители.', 4000);
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AuthRoute;
