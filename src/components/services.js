import React, {Component} from 'react';
import './services.css';
import i1 from './pict/i1.jpg';
import i6 from './pict/i6.jpg';
import i7 from './pict/i7.jpg';


class Services extends Component{
    render(){
        return(
            <div className="container">
            <div class="containers1">
            <img id="img1" src={i1} alt="Notebook"/>
             <div class="content1">
                 <p id="p1">  The Armanborg is especially designed for the conditions in the Caspian Sea (ice classed and shallow water)</p>
            </div>
            </div>

            <div class="containers2">
            <img  id="img2" src={i6} alt="Notebook"/>
             <div class="content2">
                <p id="p2">Shallow Draft Tugs from 24t bollard pull, ice classed.</p>
            </div>
            </div>

            <div class="containers3">
            <img id="img3" src={i7} alt="Notebook"/>
             <div class="content3">
                <p id="p3"> We own 4 barges that are fully ready to ship containers across the Caspian Sea. At the moment these barges are operated in pilot mode to rehearse the buisiness processes.
​</p>            
           </div>
            </div>
            </div>
        );
    }
}
export default Services;