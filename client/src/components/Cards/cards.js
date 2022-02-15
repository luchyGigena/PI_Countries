import React  from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import notFound from './404not.png'
import Styles from './Cards.module.css';



export default  function Cards({currentCountries}) {
  

  return( 
  <div className={Styles.cards} >
      {  currentCountries.length ? currentCountries.map(country =>{
         
          return(
         

              <React.Fragment key={country.id} >
              <Link to={'/home/' + country.id} className={Styles.link} >
                  <Card  name={country.name} continent={country.continent} flag={country.flag}/>
              </Link>
              </React.Fragment>
          )
      } )  : (<img src={notFound} className={Styles.loading} alt='404' />)
     
    } 
  </div>);
}


