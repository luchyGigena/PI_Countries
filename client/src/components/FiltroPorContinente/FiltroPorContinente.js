import React from 'react';
import { FilterContinent } from '../../actions';
import {  useDispatch } from 'react-redux';

export default function FiltroPorContinente({setCurrentPage}) {

  const dispatch = useDispatch()

  function handleFilter(e){
    dispatch(FilterContinent(e.target.value))
    setCurrentPage(1);
    console.log(e.target.value)
  }

  return (
  <div>
      <select onChange={(e)=> handleFilter(e)} >
      <option selected="true" disabled="disabled">Select Continent</option>
          {/* value === a lo que me trae la api*/}
          <option value='All'>All</option>
          <option value='Africa'>Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value='Europe'>Europa</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
      </select>
  </div>);
}


