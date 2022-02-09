import React from 'react';
import { orderByName } from '../../actions/index.js';
import { useDispatch } from 'react-redux';

export default function FiltroPorNombre() {
  const dispatch = useDispatch() 


  function handleFilterName(e){
   // e.preventDefault;
    dispatch(orderByName(e.target.value))
  
  }


  return(
             
      <select onChange={e=> handleFilterName(e)} name="filterAZ" id="filterAZ">
      <option selected="true" disabled="disabled">Order A-Z</option>
          <option value='ascending'> A - Z</option>
          <option value='descending'> Z - A</option>
      </select>

 );
}


