import { DATA, INCREASE, DECREASE, RESET } from "../types"

export const dataUsersFetch = (data) => ({type:DATA,payload:data})



export const increaseCounter = () => ({type:INCREASE})
export const decreaseCounter = () => ({type:DECREASE})
export const resetCounter = () => ({type:RESET})