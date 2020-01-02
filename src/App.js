import React from 'react';
import Home from './pages/Home'
import LoaderBox from './components/LoaderBox';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <LoaderBox/>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
