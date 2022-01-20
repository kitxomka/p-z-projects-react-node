import TABLEDATA from './constants';

const getTheDate = () => {
    var today  = new Date();
    return today.toLocaleDateString("en-US");
};

export const initialState = {
    creatorName: '',
    comment: '',
    date: getTheDate(),
    isLoading: false,
    tableData: [],
    isError: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TABLEDATA.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case TABLEDATA.LOAD_SUCCESS:
            return {
                ...state,
                tableData: action.tableData,
                isLoading: false,
            };
            default: 
                return state;
    }        
}

export default reducer;