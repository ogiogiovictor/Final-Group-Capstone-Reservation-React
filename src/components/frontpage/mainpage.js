import React from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {

    return (
        <div className="App">
           <div className="mainTitle">The New Vespa Tridient</div>
           <center>
           <NavLink to="/home"><button className="btn btn-lg btn-vespa">Learn More</button></NavLink>
           </center>
        </div>
    )

}

export default MainPage;