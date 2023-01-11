import React, {Fragment} from 'react';
import logo from '../../vespa_logo.jpg';
import '../css/navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {

    return (
        <Fragment>
        <div className="col-sm-2 g-0 border">
         <img src={ logo } class="logo"/>
         
         <ul>
            <li><NavLink to="/models" className="active">MOTORCYCLES</NavLink></li>
            <li><NavLink to="/drive">ADD MOTORCYCLES </NavLink></li>
            <li><NavLink to="/test_ride">BOOK A RIDE</NavLink></li>
            <li><NavLink to="/shop">MY RESERVATION</NavLink> </li>
            <li><NavLink to="/drive">REMOVE MOTORCYCLES </NavLink></li>
            <li onClick={props.onShowCart}><NavLink to="#">REGISTER </NavLink></li>
            <li onClick={props.onLogin}><NavLink>LOGIN </NavLink></li>
         </ul>

         <footer class="footera-area">
            <div>
            <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href=""><i className="fa fa-twitter"></i></a>
            <a href=""><i className="fa fa-linkedin"></i></a>
            <a href=""><i className="fa fa-google"></i></a>
            <a href=""><i className="fa fa-youtube"></i></a>
            </div>
            <div>
            <small className="footer-small">© 2021 Piaggio & C. S.p.A. - All rights reserved</small>
            </div>
           
         </footer>
       
         

        </div>

       
        </Fragment>
    )

}

export default Navigation;