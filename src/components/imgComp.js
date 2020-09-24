import React from 'react';
import './imgcomp.css';

function ImgComp ({src}){
    
    return <img className="image" src={src} alt="slide-img" ></img>
}
export default ImgComp;