import CONSTANTS from './constants';

const getTheDate = () => {
    var today  = new Date();
    return today.toLocaleDateString("en-US");
};


export const initialState = {
    creatorName: '',
    comment: '',
    date: getTheDate(),
    newRow: [
        {
            id: 1,
            price: 0,
            quantity: 0,
            sum: 0,
        }
    ]    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        case CONSTANTS.SET_NEW_ROW:
            return {
                ...state,
                newRow: [...state.newRow, {
                    id: action.payload,
                    price: 0,
                    quantity: 0,
                    sum: 0
                }]
            }         
        case CONSTANTS.SET_PRICE:
            const selectedRowPrice = state.newRow.map(item => {
                const id = parseInt(action.payload.id)
                const value = parseInt(action.payload.value)
                const quantity = item.quantity
                if(item.id === id){
                    return {
                        ...item,
                        price: value,
                        sum: value * quantity
                    }
                } else {
                    return item;
                }
            }
        );
            return {
                ...state,
                newRow: selectedRowPrice
            }; 
        case CONSTANTS.SET_QUANTITY:

            const selectedRowQuantity = state.newRow.map(item => {
                const id = parseInt(action.payload.id)
                const value = parseInt(action.payload.value)
                const price = item.price
                if(item.id === id){
                    return {
                        ...item,
                        quantity: value,
                        sum: value * price
                    }
                } else {
                    return item;
                }
            }
        );
            return {
                ...state,
                newRow: selectedRowQuantity
            }; 
            
        case CONSTANTS.RESET_FORM: 
            console.log('initialState', initialState)
            return initialState;          
        default: 
            return initialState;
    }        
}

export default reducer;