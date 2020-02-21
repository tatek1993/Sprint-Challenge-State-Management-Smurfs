import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
        .get('http://localhost:3333')
        .then(res => {
            // console.log('this is res', res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data })
        })

        .catch(err => {
            console.error('error fetching data from api. err: ', err);
            dispatch({ type: SET_ERROR, payload: 'error fetching api data' });
        });
};