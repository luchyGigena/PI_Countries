import React from 'react';
import { orderByPopulation } from '../../actions';
import { useDispatch } from 'react-redux';

export default function FiltroPorPoblacion({setCurrentPage , setOrder}) {
  const dispatch = useDispatch()

  function handleOrderPopulation (e){
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value))
    setCurrentPage(1)
    setOrder(`Order ${e.target.value}`)
    console.log(e.target.value)

  }

  return (
  <div>
      <select onChange={e=> handleOrderPopulation(e)}>
        <option selected="true" disabled="disabled">Population</option>
          <option value='Highest'> Highest </option>
          <option value='Lowest'> Lowest </option>
      </select>
  </div>
  )
}


