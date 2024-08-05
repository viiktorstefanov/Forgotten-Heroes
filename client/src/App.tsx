import React from 'react';
import './App.css';

import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { useDispatch } from 'react-redux';
import { getLocalStorage } from './services/LocalStorageService';
import { setUser } from './state/auth/authSlice';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import Logo from './components/Logo/Logo';
import NavBarBorder from './components/NavBarBorder/NavBarBorder';
import NavBar from './components/NavBar/NavBar';
import FooterBorder from './components/FooterBorder/FooterBorder';
import FooterBox from './components/FooterBox/FooterBox';
import CopyrightMessage from './components/CopyrightMessage/CopyrightMessage';
import CopyrightOwner from './components/CopyrightOwner/CopyrightOwner';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = getLocalStorage();

  if(user) {
    dispatch(setUser({user}));
  };

  return (
      <main className='app-container'>
        
        <Loader />
        <ToastContainer  />

        <Header>
          <Logo />
          <NavBarBorder />
          <NavBar />
        </Header>

        <AppRoutes />

        <Footer>
          <FooterBorder />
          <FooterBox>
            <CopyrightMessage />
            <CopyrightOwner />
          </FooterBox>
        </Footer>
        
      </main>
  )
};

export default App;