import React from 'react';
import { filterActivity } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './FiltroActividad.module.css';
import { Link } from 'react-router-dom';



export default function FiltroActividad({setCurrentPage }) {
  const dispatch = useDispatch()
  const activity= useSelector((state)=> state.activities)

  function handleFilterActivity(e){
    e.preventDefault()
    dispatch(filterActivity(e.target.value))
    setCurrentPage(1)
    
    console.log('que tiene e', e.target.value)
  }

  return(
  <div >
      <select className={Styles.activityFilter} onChange={(e)=> handleFilterActivity(e)}>
      <option selected="true" disabled="disabled">Select Activity</option>
      {
       //console.log('act',activity),

        activity?.map(act => {
          return(
            <option id={act.id} key={act.id} value={act.name}>{act.name}</option>
          )
        })
      }

      </select>


      <div>
        <Link to='/activities'> 
        <button className={Styles.activityFilter} >Create Activity</button>
        </Link> 
      </div>


  </div>);
}
