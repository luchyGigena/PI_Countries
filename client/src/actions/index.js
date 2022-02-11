import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_NAME_CUNTRIES ='GET_NAME_CONTRIES';
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"
export const FILTER_CONTINENT = "FILTER_CONTINENT"
export const FILTER_ACTIVITY = "FILTER_ACTIVITY"
export const POST_ACTIVITY = "POST_ACTIVITY"


//aca es donde conecto mi back con mi front
export function getAllCountries(){
    return async function(dispach){
        let response = await axios.get("http://localhost:3001/countries")
        //console.log(response)
         dispach({
            type: GET_COUNTRIES, 
            payload: response.data // lo que me va a cargar

        })
    }
}

export function orderByName(payload){ // payload es el value que me va a llegar desde el componente /para filtro az za
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function FilterContinent(payload){
    return{
        type: FILTER_CONTINENT,
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}

export  function getNameCoutries (name){ //o name, porque es lo que voy a buscar
    return async function (dispach){
        try{
            let res = await axios.get('http://localhost:3001/countries?name=' + name);
            return dispach({
            type: GET_NAME_CUNTRIES,  
            payload : res.data //es lo que me devuelve x ruta una vez que asigno name
        }) 
        }catch(err){
            console.log(err)
        }
    }
}

export function getActivities (){
    return async function(dispatch){
        try{
        const response = await axios.get("http://localhost:3001/activities")
        dispatch({
            type: GET_ACTIVITIES,
            payload: response.data
        })
        }catch(error){
            console.log(error)
        }
    }
}

export  function postActivity (payload) { //me trae todo lo que llena el user
    return async function (dispach){
        let res = await axios.post('http://localhost:3001/activities', payload);
        return dispach({
            type: POST_ACTIVITY,
            payload: res
        })
    }
}


export function filterActivity(payload){
    console.log(payload)
    return{
        type: FILTER_ACTIVITY,
        payload
    
    }
    
}

export function getDetailCountry(id){
    return async function (dispach){
        try{
            let res = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispach({
                type: GET_COUNTRY_DETAIL,
                payload: res.data
            })
        }catch(err){
            console.log(err)
        }
    }

}

