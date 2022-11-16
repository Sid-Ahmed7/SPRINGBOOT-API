import * as types from "../actions/types"

const initialState = [];
const contentsReducers =(state = initialState, action) => {
    switch (action.type) {
        case types.ADD_WORD: 
        return[    
                    
            ...state,
            action.payload
            
        ]
        case types.GET_WORD:
            return[
                ...state,
                action.payload]
        case types.DELETE_WORD:
            return[]
           
        default:
            return state;
    }
};

export default contentsReducers;