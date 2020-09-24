import React, {Component} from 'react';
import Vessel from './photo/Vessel2.jpg';
import Header from './Header';
import './home.css';
import Slide from './slideshow'


class Home extends Component{
    render(){
        return(
            
                <div className="container">
                    <Slide/>
                    <h1>GSR PHOENIX LLP</h1>
                    <h2 id="h2">Projects</h2>
                    
                    
                </div>
        );
    }
}
export default Home;