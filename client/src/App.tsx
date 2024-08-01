import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

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
