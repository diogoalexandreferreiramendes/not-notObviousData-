import { GET_DATA } from "../actions/types"

const initialState = {
    data: [],
    valor: 0
}

const getData = (state = initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default getData