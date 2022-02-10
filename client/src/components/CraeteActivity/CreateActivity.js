import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// importo acctiones de postactivity y get activities
import { getActivities, postActivity ,getAllCountries } from '../../actions';
import {Link} from 'react-router-dom';
//import { useHistory } from "react-router-dom";
import Styles from './CreateActivity.module.css'

// funcion para validar mi form



export default function CreateActivity() {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const [error, setError] = useState({})
    //const history = useHistory()

    const [input, setInput] = useState({
       name:'',
       dificultad:'',
       duracion:'',
       temporada:['Verano', 'Otoño', 'Invierno', 'Primavera'],
       countries:[]
    })

    function validate(){
        let error={};
        if(!input.name || !input.dificultad || !input.duracion || !input.temporada || !input.countries){
            error.name = ' ** Los Campos deben estar completos'
        }
        return error
    }

    useEffect(()=>{
        
        dispatch(getAllCountries())
        //dispatch(getActivities())
    },[])

    function handleChange(e){
        setInput({
            ...input, //haceme una copia de lo que tengo
            [e.target.name] : e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                temporada: e.target.value
            })
            setError(validate({
                ...input,
                [e.target.name] : e.target.value
            }))
        } 
    }

    function handleSelect(e){
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
        console.log(input)
    }
    function handleDelete(el){
        setInput({
            ...input,
            countries: input.countries.filter(country => country !== el) // filtrame por todo lo qe no sea ese elemento, me devuleve todo sin ese elemento. 
        })
    }

    function handleSubmit(e){
        //e.preventDefault(),
        console.log(input)
        dispatch(postActivity(input))
        alert('Activity Created')
        setInput({
            name:'',
            dificultad:'',
            duracion:'',
            temporada:['Verano', 'Otoño', 'Invierno', 'Primavera'],
            countries:[]
        })
    }



  return( 
    <div className={Styles.formContainer}>
    <h1>Create Activities</h1>

        <div>
        <form onSubmit={(e)=> handleSubmit(e)} className={Styles.form}>
                <div className={Styles.activityName} >
                    <label>Name:</label> 
                    <input
                     type='text' value={input.name}
                     name='name' placeholder="Activity name..."
                      onChange={handleChange} />
                      {error.name && (
                          <p className={Styles.error}>{error.name}</p>
                      )}
                </div>
                <div className={Styles.difficulty}>
                    <label>Difficuty:</label>
                    <select onChange={handleChange} name="dificultad" value={input.dificultad}>
                    <option selected="true" disabled="">Select Difficulty</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    {error.name && (
                          <p className={Styles.error}>{error.name}</p>
                      )}
                </div>
                <div className={Styles.duration}>
                    <label>Duration in minutes</label>
                    <input type='number'  min='10' max='300' value={input.duracion} onChange={handleChange }  name='duracion' placeholder='Mins...'/>
                    {error.name && (
                          <p className={Styles.error}>{error.name}</p>
                      )}
                </div>
                <div className={Styles.season}>
                    <label>Season : </label>
                    <div>
                    <label><input type='checkbox' name='Verano' value='Verano' onChange={e =>handleCheck(e)}/> Verano </label>
                    <label><input type='checkbox' name='Invierno' value='Invierno' onChange={e =>handleCheck(e)}/> Invierno </label>
                    <label><input type='checkbox' name='Otoño' value='Otoño' onChange={e =>handleCheck(e)}/> Otoño </label>
                    <label><input type='checkbox' name='Primavera' value='Primavera' onChange={e =>handleCheck(e)}/> Primavera </label>
                    {error.name && (
                          <p className={Styles.error}>{error.name}</p>
                      )}
                    </div>
                   
                </div>
             <div className={Styles.countries}>
                    <label>Countries</label>
                    <select value={input.countries} name='countries' onChange={e => handleSelect(e)} >
                    <option selected="true" disabled="">Select Country</option>
                    { 
                      countries.map((country)=>(
                       <option value={country.name} key={country.id}>{country.name}</option>)
                       ) 
                    }
                    </select>
                    {error.name && (
                          <p className={Styles.error}>{error.name}</p>
                      )}


                
                    <div className={Styles.countriesSelected}>
                    {input.countries.map(el => 
                    <div className={Styles.country} key={el.id}>
                        <h4>{el}</h4>
                        <button className="btnDelete" onClick={() => handleDelete(el)}>x</button>
                    </div>
                    )}
                </div>

                </div>  

                 
                        <input className={Styles.submit}
                           type="submit" value="Submit"
                           disabled={
                           !input.name || !input.dificultad || !input.duracion || !input.temporada || !input.countries
                           }/>
                        
        </form>
        </div>
        


        <Link to='/home'>
            <button className={Styles.btnBack}>Back tu Home</button>
        </Link>

    </div>);
}
