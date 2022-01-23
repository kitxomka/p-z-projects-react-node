import CONSTANTS from './constants';

const getTheDate = () => {
    var today  = new Date();
    return today.toLocaleDateString("en-US");
};

export const initialState = {
    creatorName: '',
    comment: '',
    date: getTheDate(),
    tableData: [],
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case CONSTANTS.LOAD_SUCCESS:
            return {
                ...state,
                tableData: action.tableData,
                isLoading: false,
            };
        case CONSTANTS.SET_CREATOR_NAME: 
            return {
                ...state,
                creatorName: action.payload
            };
        case CONSTANTS.SET_COMMENT: 
            return {
                ...state,
                comment: action.payload
            };  
        case CONSTANTS.RESET_FORM: 
            return initialState;          
        default: 
            return initialState;
    }        
}

export default reducer;