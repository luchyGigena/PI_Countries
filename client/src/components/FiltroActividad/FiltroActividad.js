import React from 'react';
import { filterActivity , getActivities} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function FiltroActividad({setCurrentPage}) {
  const dispatch = useDispatch()
  const activities = useSelector((state)=> state.activities)



  useEffect(()=>{
    dispatch(getActivities())
  },[])

  function handleFilterActivity(e){
    e.preventDefault()
    dispatch(filterActivity())
    setCurrentPage(1)
    console.log('que tiene e', e.target.value)
  }



  return(
  <div>
      <select onChange={(e)=> handleFilterActivity(e)}>
      <option selected="true" disabled="disabled">Select Activity</option>
      {
        console.log('act',activities),

        activities?.map(act => {
          return(
            <option id={act.id} key={act.id} value={act.name}>{act.name}</option>
          )
        })
      }

      </select>


  </div>);
}
