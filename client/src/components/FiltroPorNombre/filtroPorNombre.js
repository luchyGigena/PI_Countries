import React from 'react';
import { useDispatch } from 'react-redux';

export default function filtroPorNombre() {
  return(
  <div>
      <select>
      <option selected="true" disabled="disabled">A-Z</option>
          <option value='ascending'> A - Z</option>
          <option value='descending'> Z - A</option>
      </select>

  </div>);
}


