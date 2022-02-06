import React from 'react';

export default function Card({id, flag, name, continent}) {

  return (
    
      <div key={id}>
    
      <img src={flag} alt='' width='200px' height='250px'/>
      <h2 >Country: {name}</h2>
      <h4 >Continent :{continent}</h4>

    </div>)
}

