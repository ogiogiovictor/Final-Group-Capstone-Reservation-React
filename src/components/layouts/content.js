import React from 'react';

import '../css/content.css';

const Content = () => {

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
                            <div className="myCard">
                                1
                            </div>
                            <div className="myCard">
                                2
                            </div>
                            <div className="myCard">
                                3
                            </div>
                            <div className="myCard">
                                4
                            </div>
                            <div className="myCard">
                                5
                            </div>
                        </div>

                    </div>
                       
                </div>
             </div>



            </div>
        )
    
}

export default Content;