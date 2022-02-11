import React from 'react';
import { getDetailCountry } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';
import Styles from './CountryDetail.module.css'




export default function CountryDetail() {
    const dispatch = useDispatch()
    const {id} = useParams()

    console.log('que es iddETAIL', id)
    const detail = useSelector((state)=> state.countryDetail)
    


    useEffect(()=>{
        dispatch(getDetailCountry(id)) ///props.match.params.id
    },[dispatch, id])



    return(
        <div className={Styles.detailContainer}>

<h1>Country Detail</h1>

            <div className={Styles.header}>
                <Link to="/home">
                    <button className={Styles.btnBack}>Back to home</button>
                </Link>
                
            </div>
            
            {
                console.log('detail',detail),
            
            Object.keys(detail).length > 0 ?  //me devuleve un array de la propiedad detail, sus posiciones
                <div className={Styles.countryContainer}>
                    <div>
                        <img className={Styles.flag} src={detail.flag} alt="flag Image" />
                    </div>
                    <div className={Styles.details}>
                        <h1>{detail.name} ({detail.id})</h1>
                        <h2>Continent : {detail.continent}</h2>
                        <h3>Capital: {detail.capital}</h3>
                        <h3>Subregion: {detail.subregion}</h3>
                        <h4>Area: {detail.area} - Km2</h4>
                        <h4>Population: {detail.population}</h4>
                    </div>
                    <div className={Styles.activities}>
                        <h2>Activities</h2>
                        {detail.activities.length > 0 ? detail.activities.map(activity =>
                            <div>
                                <h3>{activity.name}</h3>
                                <h4>Difficulty: {activity.dificultad}</h4>
                                <h4>Duration: {activity.duracion} minutes</h4>
                                <h4>Season: {activity.temporada}</h4>
                            </div>
                        ) : <h3>There is no activities</h3>}
                    </div>
                </div> : <p>Country Not Found</p>
        }
        </div>
    )
}




