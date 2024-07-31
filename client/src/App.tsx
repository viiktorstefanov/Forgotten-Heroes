import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className='views'>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
};

export default App;
