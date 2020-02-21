import axios from 'axios';
import { bindActionCreators } from 'redux';

export const GET_DATA = 'GET_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_ERROR = 'SET_ERROR';
export const ADD_SMURFS = 'ADD_SMURFS';

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is res', res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data })
        })

        .catch(err => {
            console.error('error fetching data from api. err: ', err);
            dispatch({ type: SET_ERROR, payload: 'error smurfing(fetching) api data' });
        });
};

export const addSmurfs = newSmurf => dispatch => {
    dispatch({ type: POST_DATA });
    axios 
        .post('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is res', res);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.error('error fetching data from api. err: ', err);
            dispatch({ type: POST_ERROR, payload: err})
        });
}

