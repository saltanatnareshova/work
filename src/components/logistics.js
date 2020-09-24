import React, {Component} from 'react';
import './logistics.css';
import SliderLog from './slidelog';

class Logistics extends Component{
    render(){
        return(
                <div className="container">
                    <SliderLog/>
                    <h2>LOGISTICS</h2>
                    <p>In the near future our company is planning to expand by adding new vessels to its fleet and develop a TransCaspian International Transport Route (TITR) on the Caspian Sea.
​
                        We own 4 barges that are fully ready to ship containers across the Caspian Sea. At the moment these barges are operated in pilot mode to rehearse the buisiness processes.
                        The designed capacity of each barge is 41 containers or a fully-loaded container train.</p>
                </div>
        );
    }
}
export default Logistics;