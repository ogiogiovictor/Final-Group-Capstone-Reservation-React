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
                            </div>
                            <div className="myCard">
                            <div><img src="http://localhost:3005/images/vespa2.jpg" /></div>
                                <div className="myTitle">Newpa Vespa</div>
                                <div><button class="btn-xs btn-vespa">Reserve</button></div>
                                <div className="myContent">The Vespa is a class bassed Trip that helps drivers manage...</div>
                                <div className="socialsLinks">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-youtube"></i>
                                </div>
                            </div>
                            <div className="myCard">
                            <div><img src="http://localhost:3005/images/vespa3.jpg" /></div>
                                <div className="myTitle">Motobycle</div>
                                <div><button class="btn-xs btn-vespa">Reserve</button></div>
                                <div className="myContent">The Vespa is a class bassed Trip that helps drivers manage...</div>
                                <div className="socialsLinks">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-youtube"></i>
                                </div>
                            </div>
                            <div className="myCard">
                            <div><img src="http://localhost:3005/images/vespa7.jpg" /></div>
                                <div className="myTitle">Vespan New</div>
                                <div><button class="btn-xs btn-vespa">Reserve</button></div>
                                <div className="myContent">The Vespa is a class bassed Trip that helps drivers manage...</div>
                                <div className="socialsLinks">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-youtube"></i>
                                </div>
                            </div>
                            <div className="myCard">
                            <div><img src="http://localhost:3005/images/vespa5.jpg" /></div>
                                <div className="myTitle">Cactlus Fins</div>
                                <div><button class="btn-xs btn-vespa">Reserve</button></div>
                                <div className="myContent">The Vespa is a class bassed Trip that helps drivers manage...</div>
                                <div className="socialsLinks">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-youtube"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                       
                </div>
             </div>



            </div>
        )
    
}

export default Content;