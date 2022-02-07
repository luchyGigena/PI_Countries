import React from 'react';
import Styles from './paginate.module.css'

export default function Paginate({ coutriesPerPage,allCountries, paginate }) { //este componente me renderiza los numeritos en si
    const pageNumbers=[];
   
//math.ciel me rodondea para arriba
     for (let i= 0 ; i<=Math.ceil(allCountries/coutriesPerPage); i++){
       pageNumbers.push(i+1)
        //resulta un arreglo de numeros 
    }
  return(
     
     <nav>    
           <ul className={Styles.paginate}>
               {pageNumbers?.map((number) =>
                
                <li className={Styles.number} key={number}>
                    <button className={Styles.btnPaginate} onClick={() => paginate(number)}> Pagina:{number}</button>
                </li>
                ),
                console.log('que tiene', pageNumbers)
                }
           </ul>  
          
       </nav>

       );
}
