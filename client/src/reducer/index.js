import React from "react";
import {GET_COUNTRIES, FILTER_CONTINENT, FILTER_ACTIVITY, GET_ACTIVITIES, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_NAME_COUNTRIES, POST_ACTIVITY, GET_COUNTRY_DETAIL} from "../actions/index";



const initialState = {
    countries :[],
    allCountries: [] // lo tengo de soporte paa que siempre tenga tops los paises
}

function rootReducer(state = initialState, {type, payload}){
   
    switch(type){
        case GET_COUNTRIES:
            return{ //inicialmente countries es un [] vacio, haceme una copia del state y despues a countries manedale lo que encuentres en el payload(json.data)
                ...state,// guardo el estado siempre primeramente para no perder valores
                countries: payload ,// mandame todo lo que te mande la accion GET_COUNTRIES
                allCountries: payload
            }
        case ORDER_BY_NAME:
             const orderByName= payload === 'ascending' ?
             state.countries.sort(function(a,b){ //accede a mi estado countries y hacele un sort
                 if(a.name > b.name){
                     return 1 // los invierte
                 }
                 if(b.name > a.name){
                     return -1; // no invierte
                 }
                 return 0
             }) :
             state.countries.sort(function(a,b){
                 if(a.name > b.name){
                     return -1 // no intercambia
                 }
                 if(b.name > a.name){
                     return 1 //lo intercambia
                 }
                 return 0  // no intercamb. ===
             })
                return{
                    ...state,
                    countries: orderByName
                }

        case FILTER_CONTINENT:
                 const paisesTodos = state.allCountries
                 const  continentFilter = payload === 'All' ? paisesTodos : paisesTodos.filter(c => c.continent === payload)
             return {
                ...state,
                countries: continentFilter
             } 
             case ORDER_BY_POPULATION:
                 const orderByPopulation = payload === 'Lowest' ?
                 state.allCountries.sort(function(a,b){
                     if(a.population > b.papulation){
                         return 1
                     }
                     if(b.population > a.population){
                         return -1
                     }
                     return 0
                 }) :
                 state.allCountries.sort(function(a,b){
                     if(a.population > b.population){
                         return -1
                     }
                     if(b.population > a.population){
                         return 1
                     }
                     return 0
                 })
                 return{
                     ...state,
                     allCountries: orderByPopulation   
                 }
                
                 default:
                return state;

           
    }


}

export default rootReducer;