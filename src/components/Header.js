import React, { Component } from 'react';
import './Header.css';
import Logo from './photo/logo.jpg';

class Header extends Component{
    render(){
        return(
            <div className="header">
            <img src={Logo} />
            <ul><li><a href="/home">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href='/services'>SERVICES</a></li>
            <li><a href='/logistics'>LOGISTICS</a></li>
            <li><a href='/contact'>CONTACT</a></li>
            </ul>
            </div>
        );
    }
}

export default Header;