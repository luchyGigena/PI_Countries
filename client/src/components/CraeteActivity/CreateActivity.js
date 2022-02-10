import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// importo acctiones de postactivity y get activities
import { getActivities, postActivity } from '../../actions';
import {Link } from 'react-router-dom';


export default function CreateActivity() {
    const dispatch = useDispatch()
    const actividades = useSelector((state) => state.activities)
    const [input, setInput] = useState({
       name:'',
       dificultad:'',
       duracion:'',
       temporada:['Verano', 'Otoño', 'Invierno', 'Primavera'],
       inputCountries:[]
    })

    useEffect(()=>{
        dispatch(getActivities())
    },[])



  return( 
    <div>
        <Link to='/home'>
            <button>Volver</button>
        </Link>

        <h1>Crea tu Actividad</h1>
        <form>
                <div>
                    <label>Name:</label> <input type='text' value={input.name} name='name' placeholder="Activity name..."  />
                </div>
                <div>
                    <label>Difficuty:</label>
                    <select>
                    <option selected="true" disabled="">Select Difficulty</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <label>Duration in minutes</label>
                    <input type='number'  min='10' max='300' value={input.duracion} name='duracion' placeholder='Mins...'/>
                </div>
                <div>
                    <label>Season</label>
                    <select>
                    <option selected="true" disabled="">Select Season</option>
                    <option value={input.temporada[0]}>Verano</option>
                    <option value={input.temporada[1]}>Otoño</option>
                    <option value={input.temporada[2]}>Invierno</option>
                    <option value={input.temporada[1]}>Primavera</option>
                    </select>
                </div>
                {/* <div>
                    <label>Countries</label>
                    <select>
                    <option selected="true" disabled="">Select Country</option>
                    {
                       inputCountries?.map((country, i)=>(
                       <option value={country.id} key={i}>{country.name}</option>)
                       ) 
                    }
                    </select>
                </div> */}

                <input type='submit' value='Submit'
                disabled={
                    !input.name ||
                    !input.dificultad ||
                    !input.duracion ||
                    !input.temporada 
               //     !input.inputCountries
                }/>




        </form>
        

    </div>);
}
