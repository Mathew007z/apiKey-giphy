import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter, resetCounter } from "../actions";



const CounterItem = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()


    return(
        <div>
            {counter}
            <button onClick={()=>dispatch(increaseCounter())}> + </button>
            <button onClick={()=>dispatch(decreaseCounter())}> - </button>
            <button onClick={()=>dispatch(resetCounter())}> Reset </button>
        </div>
    )
}

export default CounterItem;