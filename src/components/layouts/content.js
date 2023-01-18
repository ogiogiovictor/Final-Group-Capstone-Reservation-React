import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMotocycle } from '../../redux/motorcycle/motocycle_slice';
import Motorcycles from '../../motorcyles/motorcycles';

import '../css/content.css';

const Content = () => {
    const allMotocycle = useSelector((state) => state.motor);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!allMotocycle.length) {
          dispatch(getMotocycle());
        }
      }, [allMotocycle.length, dispatch]);
    

    const btnPressprev = () => { 
        let box = document.querySelector('.product-container');
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
      
    };

    const btnPressnext = () => { 
        let box = document.querySelector('.product-container');
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
     
    }
    
        return (
            <div  className="col-sm-9 content-area">
             <h2>LATEST MODELS</h2>
             <div>Choose from our exquisite designs</div>


             <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">

                    <div className="product-carousel">
                        <button className="prev-btn" onClick={btnPressprev}><p><i className="fa fa-arrow-left"></i></p></button>
                        <button className="next-btn" onClick={btnPressnext}><p><i className="fa fa-arrow-right"></i></p></button>

                        <div className="product-container">
                            {/* <div className="myCard">
                                <div><img src="http://localhost:3005/images/vespa1.jpg" /></div>
                                <div className="myTitle">Vespa Espano</div>
                                <div><button class="btn-xs btn-vespa">Reserve</button></div>
                                <div className="myContent">The Vespa is a class bassed Trip that helps drivers manage...</div>
                                <div className="socialsLinks">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-youtube"></i>
                                </div>
                            </div> */}
                            

                            {
                            allMotocycle.length ? <Motorcycles motorcycles={allMotocycle} /> : <h2>No Cars Found Found</h2>
                            }

                           
                        </div>

                    </div>
                       
                </div>
             </div>



            </div>
        )
    
}

export default Content;