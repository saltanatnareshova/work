
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Logistics from './components/logistics';
import Contact from './components/contact';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/footer';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/logistics' component={Logistics} />
          <Route path='/contact' component={Contact} />
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
