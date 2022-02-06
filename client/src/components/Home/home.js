import React, { Fragment } from 'react';
import {useState , useEffect} from 'react';
import {useDispatch , useSelector } from 'react-redux';
import {Link} from "react-router-dom";
//import la accion
import {getAllCountries} from '../../actions'
//import components
import Card from '../Card/Card';

export default  function Home() {
    const dispatch = useDispatch()  // para usar la constante despachando mis acciones  
    const allCountries = useSelector((state)=> state.countries) // le paso el state , es lo mismo que hacer el mapStateToProps; []

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


      <div>
        {
        console.log(allCountries),
       allCountries.map(c =>{
        console.log('que es c',c)      
        return(
                
              <Card key={c.id} name={c.name} flag={c.flag} continent={c.continent}/>
           ) }
            ) 
        }
      </div>
      
    </div>
  )
};


