import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
//import {useSelector} from 'react-redux';
import Styles from './Cards.module.css';

export default  function Cards({currentCountries}) {
   // const allCountries = useSelector((state)=> state.countries)   


  return( 
  <div className={Styles.cards} >
      {  
     (currentCountries.map(country =>{
       
          return(
              <React.Fragment key={country.id} >
              <Link to={'/home/' + country.id} className={Styles.link} >
              <Card  name={country.name} continent={country.continent} flag={country.flag}/>
              </Link>
              </React.Fragment>
            
          )
      } ) ) 
    
    }

  </div>);
}


