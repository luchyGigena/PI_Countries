import React from 'react';

export default function FiltroPorPoblacion() {
  return (
  <div>
      <select>
        <option selected="true" disabled="disabled">Population</option>
          <option value='highest'> Highest </option>
          <option value='lowest'> Lowest </option>
      </select>
  </div>
  )
}


