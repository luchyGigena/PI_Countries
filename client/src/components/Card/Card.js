import React from 'react';
import Styles from './Card.module.css'

export default function Card({id, flag, name, continent}) {

  return (

      <div className={Styles.card} key={id}>
    
      <img src={flag} alt='Flag Img' />
      <h3 >Country: {name}</h3>
      <h4 >Continent :{continent}</h4>

    </div>)
}

