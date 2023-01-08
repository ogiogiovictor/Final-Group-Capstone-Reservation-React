import React from 'react'

function Motorcycles(props) {
  return (
    <div>
      <h1>These motorcycles are from the API</h1>
      {props.motorcycles.map((motorcycle) => {
        return (
          <div key={motorcycle.id}>
            <h2>{motorcycle.model}</h2>
            <p>{motorcycle.description}</p>
          </div>
        )
      })}
    </div>    
  );
}

export default Motorcycles