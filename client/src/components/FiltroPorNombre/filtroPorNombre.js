import React from 'react';
import { orderByName } from '../../actions/index.js';
import { useDispatch } from 'react-redux';
import Styles from './FiltroPorNombre.module.css'

export default function FiltroPorNombre({setCurrentPage , setOrden}) {
  const dispatch = useDispatch() 


  function handleFilterName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrden(`ordenado ${e.target.value}`)
  
  }


  return(
             
      <select onChange={e=> handleFilterName(e)} name="filterAZ" id="filterAZ" className={Styles.nameFilter}>
      <option selected="true" disabled="disabled">Order A-Z</option>
          <option value='ascending'> A - Z</option>
          <option value='descending'> Z - A</option>
      </select>

 );
}


