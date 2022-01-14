import axios from 'axios';
import { GET_DATA } from './types';


export const getData = () => dispatch => {
    axios.get(process.env.REACT_APP_API_KEY_TOKENS)
    .then(res => {
        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    }).catch(err => console.log(err))
}