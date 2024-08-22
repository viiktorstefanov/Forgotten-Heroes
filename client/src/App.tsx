import React, { useEffect } from 'react';
import './App.css';

import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { useDispatch, useSelector } from 'react-redux';
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
import { setIsMobile } from './state/screen/screenSlice';
import { checkIsMobile  } from './utils/screenUtil';
import { RootState } from './state/store';
import MobileNavBar from './components/MobileNavBar/MobileNavBar';
import MobileVersion from './components/MobileVersion/MobileVersion';
import DesktopVersion from './components/DesktopVersion/DesktopVersion';

const App: React.FC = () => {
  
  const dispatch = useDispatch();
  const user = getLocalStorage();

  if(user) {
    dispatch(setUser({user}));
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(checkIsMobile()));      
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const isMobile = useSelector((state: RootState) => state.screen.isMobile);

  return (
      <main className='app-container'>
        
        <Loader />
        <ToastContainer  />

        <Header>
          {isMobile ? <MobileVersion /> : <DesktopVersion /> }
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