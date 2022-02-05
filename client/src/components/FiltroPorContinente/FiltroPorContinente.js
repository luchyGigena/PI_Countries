import React from 'react';

export default function FiltroPorContinente() {






    
  return (
  <div>
      <select>
      <option selected="true" disabled="disabled">Select Continent</option>
          {/* value === a lo que me trae la api*/}
        <option value='All'>All</option>
          <option value='AFrica'>Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value='Europe'>Europa</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
      </select>
  </div>);
}


