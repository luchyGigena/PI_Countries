import React  from 'react';
import {useState , useEffect} from 'react';
import {useDispatch , useSelector } from 'react-redux';

//import la accion
import {getAllCountries, getActivities} from '../../actions'
//import components
import Loader from './loader.gif'

import Cards from '../Cards/cards';
import Paginado from '../Paginate/paginado.js';
import SearchBar from '../SearchBar/SearchBar';
import FiltroPorNombre from '../FiltroPorNombre/FiltroPorNombre';
import FiltroPorPoblacion from '../FiltroPorPoblacion/FiltroPorPoblacion';
import FiltroPorContinente from '../FiltroPorContinente/FiltroPorContinente';
import FiltroActividad from '../FiltroActividad/FiltroActividad';
import Styles from './home.module.css';


export default  function Home() {
  const [loading, setloading] =useState(true) // para el loader
    const dispatch = useDispatch() 
    const allCountries = useSelector((state)=> state.countries) 
  
    const [orden, setOrden] = useState('')
   
   
    //PAGINADO
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
    useEffect(()=>{ // esto me reemplaza el mapdispach
         dispatch(getAllCountries()) 
         dispatch(getActivities())
         setTimeout(()=>{
           setloading(false)
         },3000)
     },[]) 



     // boton de volver a cargar paises
     function handleClick(e){
        dispatch(getAllCountries());
    }

  return( 
    <div>
        <h1> Countrie's App </h1>
       
       <div className={Styles.filterContainer}>
       <div className={Styles.filters}>
        <FiltroPorNombre setCurrentPage={setCurrentPage} setOrden={setOrden}/>
        <FiltroPorContinente setCurrentPage={setCurrentPage}/>
        <FiltroPorPoblacion setCurrentPage={setCurrentPage} setOrder={setOrden}/>
        <FiltroActividad setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <SearchBar />  
      <div className={Styles.paginate}> 
        <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginate={paginate}/> 
      </div>
        <div>
        <button onClick={e => {handleClick(e)}} className={Styles.btnBack}>  Volver a cargar Paises.  </button>
        </div>
       <div >

         { loading ? <img  src={Loader} alt="loading"/> :
         <Cards currentCountries={currentCountries} /> }
          
      </div> 
      

      </div>
  )
  
};


