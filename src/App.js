import React, {Fragment} from 'react';
import Header from './components/Header'
import Somos from './components/Somos';
import Funciona from './components/Funciona';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';


function App() {
  return (
    <Fragment>
        <Header />
        <div className="container">
          <Somos />
          <Funciona />
          <Testimonios />
          <Footer />

        </div>


        
    </Fragment>
    
  );
}

export default App;
