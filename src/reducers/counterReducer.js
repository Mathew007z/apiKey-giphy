import { DECREASE, INCREASE, RESET } from "../types";

export const initialState = 0; 

export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREASE: 
            return state + 1;
        case DECREASE:
            return state - 1;
        case RESET:
            return initialState;
        default: 
            return state;        
    }

}