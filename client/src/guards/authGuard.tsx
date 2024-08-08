import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

type AuthRouteProps = {
  element: React.ReactElement;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ element }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const location = useLocation();

  return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default AuthRoute;
