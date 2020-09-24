import React, {useState} from 'react';
import './slidelog.css';
import i1 from './pict/i1.jpg';
import i2 from './pict/i2.jpg';
import i3 from './pict/i3.jpg';
import i4 from './pict/i4.jpg';
import i5 from './pict/i5.jpg';
import ImgComp from './imgComp';
import Sign from './photo/arrow.png';

function SliderLog(){
    let sliderArr = [
        <ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>,
        <ImgComp src={i4}/>,
        <ImgComp src={i5}/>,
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0? setX(-100*(sliderArr.length-1)): setX(x+100);
    };
    const goRight = () => {
        x === -100*(sliderArr.length-1) ? setX(0) : setX(x-100);
    };
    return(
        <div className="slider">
            {sliderArr.map((item, index) => {
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>{item}</div>
                );
            })
            }
            <button className="btn-styles" id="goLeft" onClick={goLeft}><img id="arrow" src={Sign}/></button>
            <button className="btn-styles" id="goRight" onClick={goRight}><img id="arrow2" src={Sign}/></button>
        </div>
        
    );
}

export default SliderLog;