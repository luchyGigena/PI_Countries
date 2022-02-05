import axios from 'axios';

//aca es donde conecto mi back con mi front
export function getAllCountries(){
    return async function(dispach){
        let response = await axios.get('http://localhost:3001/countries')
         dispach({
            type: 'GET_COUNTRIES', 
            payload: response.data // lo que me va a cargar

        })
    }
}