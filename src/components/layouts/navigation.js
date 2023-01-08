import React, {Fragment} from 'react';
import logo from '../../vespa_logo.jpg';
import '../css/navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <Fragment>
        <div className="col-sm-2 g-0 border">
         <img src={ logo } class="logo"/>
         
         <ul>
            <li><NavLink to="/models" class="active">MODELS</NavLink></li>
            <li><NavLink to="/lifesytle">LIFESTYLE</NavLink></li>
            <li><NavLink to="/shop">SHOP</NavLink> </li>
            <li><NavLink to="/drive">TEST DRIVE </NavLink></li>
         </ul>

        </div>

       
        </Fragment>
    )

}

export default Navigation;