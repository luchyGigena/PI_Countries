import React from 'react';

export default function Card(flag, name, continent) {

  return (
  <div>
      <img src={flag} alt='Img Bandera' width='200px' height='250px'/>
      <h2>{name}</h2>
      <h4>{continent}</h4>

  </div>)
}

