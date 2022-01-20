import axios from 'axios';
import TABLEDATA from './constants';

const URL = 'http://localhost:4000';

export const requestData = (data) => async (dispatch) => {
    dispatch({
        type: TABLEDATA.LOAD,
    });
    try {
        const dbData  = await axios.get(URL);
        console.log('dbData', dbData)
        dispatch({
            type: TABLEDATA.LOAD_SUCCESS,
            tableData: dbData.data,
            isError: false,
        });
    } catch (e) {
        dispatch({
            type: TABLEDATA.LOAD_SUCCESS,
            tableData: [],
            isError: true,
        });
    }
};