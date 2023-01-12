import React, { Fragment, useState } from "react";
import Navigation from '../layouts/navigation';
import Content from '../layouts/content';
import Register from "../Auth/Register";
import Login from "../Auth/login";


const CarModels = () => {

 const [IsShown, setIsShown] = useState(false);
 const [isLogin, setIsLogin] = useState(false);

  const showHandler = () => { 
    setIsShown(true);
  }
  const hideHandler = () => {
    setIsShown(false);
    setIsLogin(false);
   }

   const showLogin =() => {
    setIsLogin(true)
   }


    return (

        <div className="container-fluid main-bg">
            <div className="container contend-bg">
                <div className="row">
                { IsShown && <Register onClose={hideHandler} />}
                { isLogin && <Login onClose={hideHandler} />}
                <Navigation onLogin={showLogin}  onShowCart={showHandler} />
                 <Content />
                </div>
            </div>
           
        </div>
    )

}

export default CarModels;