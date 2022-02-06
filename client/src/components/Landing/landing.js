import React  from 'react';
import {Link} from 'react-router-dom';
import Styles from './landing.module.css';



function landing(){
  return (
  <div className={Styles.landingPage}>
      <h1 className={Styles.title} >Welcome to Countries's App</h1>
      <Link to='/home'>
      <button className={Styles.btnEnter} > ENTER </button>
      </Link>  

      <h3 className={Styles.name} >Lucia Gigena Proyect</h3>
  </div>
  )}

export default landing;
