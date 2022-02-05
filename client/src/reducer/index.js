
const estadoInicial = {
    countries = []
}

function rootReducer(state = estadoInicial, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return{ //inicialmente countries es un [] vacio, haceme una copia del state y despues a countries manedale lo que encuentres en el payload(json.data)
                ...state,
                countries: action.payload
            }
    }


}

export default rootReducer;