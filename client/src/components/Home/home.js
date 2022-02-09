import React, { Fragment } from 'react';
import {useState , useEffect} from 'react';
import {useDispatch , useSelector } from 'react-redux';
import {Link} from "react-router-dom";
//import la accion
import {getAllCountries} from '../../actions'
//import components

import Cards from '../Cards/cards';
import Paginado from '../Paginate/paginado.js';
import FiltroPorNombre from '../FiltroPorNombre/FiltroPorNombre';
import FiltroPorPoblacion from '../FiltroPorPoblacion/FiltroPorPoblacion';
import FiltroPorContinente from '../FiltroPorContinente/FiltroPorContinente';
import Styles from './home.module.css';


export default  function Home() {
    const dispatch = useDispatch()  // para usar la constante despachando mis acciones  
    const allCountries = useSelector((state)=> state.countries) // le paso el state , es lo mismo que hacer el mapStateToProps; []
    const [orden, setOrden] = useState('')
    //paginado
    const [currentPage, setCurrentPage] = useState(1) //pagina1 /pagina actual
    //const [countriesPerPage, setCountriesPerPage] = useState(9) //paises por page.
   let countriesPerPage = 0;
    if(currentPage === 1) {
      countriesPerPage = 9;
    }
    if(currentPage >= 2){
      countriesPerPage =10
    }
    const indexOfLastCountry = currentPage * countriesPerPage // 9
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate =(pageNumber)=>{ //esta cons me va ayudar al renderizado
      setCurrentPage(pageNumber)
    }

   



    // traigo paises cuando el componente se monta
    useEffect(()=>{
         dispatch(getAllCountries())  // esto me reemplaza el mapdispach
     },[dispatch]) 



     // boton de volver a cargar paises
     function handleClick(e){
        e.preventDefault();
        dispatch(getAllCountries());
    }

  return( 
    <div>
        <Link to='/activities'> Crear Actividad </Link> 
      <h1>Soy La pagina Principal de mi App Countries </h1>

      <button onClick={e => {handleClick(e)}}>  Volver a cargar Paises.  </button>
      <FiltroPorNombre setCurrentPage={setCurrentPage} setOrden={setOrden}/>
      <FiltroPorContinente setCurrentPage={setCurrentPage}/>
      <FiltroPorPoblacion setCurrentPage={setCurrentPage} setOrder={setOrden}/>
      <div className={Styles.paginate}> 
        <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginate={paginate}/> 
      </div>

       <div >
        <Cards currentCountries={currentCountries} />
      </div> 
      

      </div>
  )
};


