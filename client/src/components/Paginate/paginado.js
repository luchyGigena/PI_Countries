import React from 'react';
import Styles from './paginate.module.css'

export default function Paginado({ countriesPerPage,allCountries, paginate }) { //este componente me renderiza los numeritos en si
    const pageNumbers=[];
   
//math.ciel me rodondea para arriba
    

for (let i= 1 ; i<=Math.ceil(allCountries/countriesPerPage); i++){
       pageNumbers.push(i)
        //resulta un arreglo de numeros 
    }

    console.log('que tiene page despues del for',pageNumbers)

  return(
     
     <nav>   

           <ul className={Styles.paginate}>
                
               {pageNumbers && pageNumbers.map(number => 
                   
                  
                
                <li className={Styles.number} key={number}>
                    <button className={Styles.btnPaginate} onClick={() => paginate(number)}> {number}</button>
                </li>
                
                )
                }
           </ul>  
          
       </nav>

       );
}
