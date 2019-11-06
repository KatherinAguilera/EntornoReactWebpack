
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
// import Loader from '../components/Loader';

// import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initalState'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
