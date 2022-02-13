import React from 'react';
import { useDispatch } from 'react-redux';
import { getNameCoutries } from '../../actions';
import { useState } from 'react';
import Styles from './SearchBar.module.css'

export default function SearchBar() {
const dispach = useDispatch()
const [name, setName] = useState('') // yo voy a estar guardando lo que tipea el usuario en mi estado local name

function handleInputhange(e){
    e.preventDefault();
    setName(e.target.value)
    //console.log(name)
}

function handleSubmit(e){ // aca despacho mi accion
    e.preventDefault();
    dispach(getNameCoutries(name))
    //console.log()
}
  return(
    

       <div className={Styles.searchBar}>
            <input 
            type='text'
            placeholder='Buscar Pais'
            value={name}
            onChange={(e)=> handleInputhange(e)}
            />
            <button type='submit' onClick={(e)=> handleSubmit(e)}>Search</button>
       </div>
       );
}
