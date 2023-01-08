import React from 'react';
import logo from '../../vespa_logo.jpg';
import '../css/navigation.css';

const Navigation = () => {

    return (
        <div className="col-sm-2 border">
         <img src={ logo } class="logo"/>
         
         <ul>
            <li>MODELS</li>
            <li>LIFESTYLE</li>
            <li>SHOP </li>
            <li>TEST DRIVE</li>
         </ul>
        </div>
    )

}

export default Navigation;