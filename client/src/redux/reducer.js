import CONSTANTS from './constants';

/**
 * 
 * @returns current date
 */
const getTheDate = () => {
    var today  = new Date();
    return today.toLocaleDateString("en-US");
};

// initial state of the app
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
        // changing the state of creatorName field 
        case CONSTANTS.SET_CREATOR_NAME: 
            return {
                ...state,
                creatorName: action.payload
            };
        // changing the state of comment field    
        case CONSTANTS.SET_COMMENT: 
            return {
                ...state,
                comment: action.payload
            }; 
        // creates new row in the table with new id    
        case CONSTANTS.SET_NEW_ROW:
            return {
                ...state,
                newRow: [...state.newRow, {
                    id: action.payload,
                    price: 0,
                    quantity: 0,
                    sum: 0
                }]
            };  
       
        /**
         *  checking if the object.id equals to action.payload.id  
         *  if true changing the state of price and sum fields 
         *  if false returning the object without changes
         */
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
        /**
         * checking if the object.id equals to action.payload.id  
         * if true changing the state of quantity and sum fields 
         * if false retorning the object without changes
         */    
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
        // resets the form and table fiels to the initial state    
        case CONSTANTS.RESET_FORM: 
            return initialState;          
        default: 
            return initialState;
    }        
}

export default reducer;