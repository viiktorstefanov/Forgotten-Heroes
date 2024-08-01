import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { clearUser, setUser } from '../state/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (user && token) {
      dispatch(setUser({ user: JSON.parse(user), token }));
    }
  }, [dispatch]);

  const handleLogin = (googleUser:any) => {
    const user = googleUser.getBasicProfile();
    const token = googleUser.getAuthResponse().id_token;

    localStorage.setItem('user', JSON.stringify({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
    }));
    localStorage.setItem('token', token);

    dispatch(setUser({
      user: {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(), 
      },
      token,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(clearUser());
  };

  return {
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
