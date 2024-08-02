import React from 'react';
import './App.css';

import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { useDispatch } from 'react-redux';
import { getLocalStorage } from './services/LocalStorageService';
import { setUser } from './state/auth/authSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = getLocalStorage();

  if(user) {
    dispatch(setUser({user}));
  };

  return (
    <>
      <main className='views'>
        <Header />
        <AppRoutes />
        <Footer />
      </main>
    </>
  )
};

export default App;
