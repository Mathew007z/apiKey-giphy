import { DATA } from "../types";

export const initialState = {
    db:[]
}

export default function dataReducer(state = initialState, action){
    switch(action.type){
        case DATA: 
            return {
                ...state,
                db: action.payload.map((data)=> data)
            }
            default:
                return state;
    }
}