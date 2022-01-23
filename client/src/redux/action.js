import axios from 'axios';
import CONSTANTS from './constants';

const URL = 'http://localhost:4000';


export const requestData = (data) => async (dispatch) => {
    dispatch({
        type: CONSTANTS.LOADING,
    });
    try {
        const dbData  = await axios.get(URL);
        // console.log('dbData', dbData)
        dispatch({
            type: CONSTANTS.LOAD_SUCCESS,
            tableData: dbData.data,
        });
    } catch (e) {
        dispatch({
            type: CONSTANTS.LOAD_SUCCESS,
            tableData: [],
            isError: true,
        });
    };
};

