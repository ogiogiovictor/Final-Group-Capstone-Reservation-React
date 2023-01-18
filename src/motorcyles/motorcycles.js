import React, { Fragment } from 'react'

function Motorcycles(props) {
  return (
    <Fragment>
      {props.motorcycles.map((motorcycle) => {
        return (
      <div className="myCard" key={motorcycle.id}>
          <div><img src={motorcycle.image_path} /></div>
          <div className="myTitle">{motorcycle.model}</div>
          <div><button class="btn-xs btn-vespa">Book</button></div>
          <div className="myContent">{ motorcycle.brand }</div>
          <div className="socialsLinks">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-youtube"></i>
          </div>
      </div>

        )
      })}
    </Fragment>    
  );
}

export default Motorcycles