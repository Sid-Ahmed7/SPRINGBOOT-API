import { GET_ERROR } from "../actions/types";

const initialState ={error: "test error"};


export default function error (state = initialState, action) {
    switch(action.type) {

        case GET_ERROR:
            return action.payload;

        default:
            return state;    


    }
}