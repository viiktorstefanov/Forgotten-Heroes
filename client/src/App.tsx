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
import NavBar from './components/NavBar/NavBar';
import Border from './components/Border/Border';
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
          <Border />
          <NavBar />
        </Header>

        <AppRoutes />

        <Footer>
          <Border />
          <FooterBox>
            <CopyrightMessage />
            <CopyrightOwner />
          </FooterBox>
        </Footer>
        
      </main>
  )
};

export default App;