import React, { Fragment } from 'react';
import {useState , useEffect} from 'react';
import {useDispatch , useSelector } from 'react-redux';
import {Link} from "react-router-dom";
//import la accion
import {getAllCountries} from '../../actions'
//import components

import Cards from '../Cards/cards';
import Paginate from '../Paginate/paginate.js';
import Styles from './home.module.css';


export default  function Home() {
    const dispatch = useDispatch()  // para usar la constante despachando mis acciones  
    const allCountries = useSelector((state)=> state.countries) // le paso el state , es lo mismo que hacer el mapStateToProps; []
   
    //paginado
    const [currentPage, setCurrentPage] = useState(1) //pagina1 /pagina actual
    const [countriesPerPage, setCountriesPerPage] = useState(9) //paises por page.
    const indexOfLastCountry = currentPage * countriesPerPage // 9
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate =(pageNumber)=>{ //esta cons me va ayudar al renderizado
      setCurrentPage(pageNumber)
    }

    //console.log('que tiene',paginate )
    // traigo paises cuando el componente se monta
    useEffect(()=>{
         dispatch(getAllCountries())  // esto me reemplaza el mapdispach
     },[dispatch]) 



     //para mi boton de volver a cargar paises
     function handleClick(e){
        e.preventDefault();
        dispatch(getAllCountries());
    }

  return( 
    <div>
        <Link to='/activities'> Crear Actividad </Link> 

      <h1>Soy La pagina Principal de mi App Countries </h1>

      <button onClick={e => {handleClick(e)}}>  Volver a cargar Paises.  </button>
 
      <div className={Styles.paginate}>
        <Paginate
        countriesPerPage={countriesPerPage} 
        allCountries={allCountries.length} 
        paginate={paginate}
        />
      </div>

       <div >
        <Cards currentCountries={currentCountries} />
      </div> 
      

      </div>
  )
};


