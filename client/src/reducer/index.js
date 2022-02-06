import React from "react";
import {GET_COUNTRIES, FILTER_CONTINENT, FILTER_ACTIVITY, GET_ACTIVITIES, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_NAME_COUNTRIES, POST_ACTIVITY, GET_COUNTRY_DETAIL} from "../actions/index";



const initialState = {
    countries :[],
}

function rootReducer(state = initialState, {type, payload}){
   
    switch(type){
        case GET_COUNTRIES:
            return{ //inicialmente countries es un [] vacio, haceme una copia del state y despues a countries manedale lo que encuentres en el payload(json.data)
                ...state,// guardo el estado siempre primeramente para no perder valores
                countries: payload // mandame todo lo que te mande la accion GET_COUNTRIES
             
            }
             default:
                return state;

           
    }


}

export default rootReducer;