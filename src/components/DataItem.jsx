import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { dataUsersFetch } from '../actions';
import axios from 'axios';


const DataItem = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const { db } = state.crud;
    const API = 'https://reqres.in/api/users?page=2';
    // const API_KEY = 'nXUmbxGKPixZ0UAkD7koUd7ryqrHN6jN';
    // const [data,setData] = useState([])

    useEffect(()=> {
        axios.get(API)
        .then(response => {
            dispatch(dataUsersFetch(response.data.data))
        }).catch(err => console.error(err));
    },[dispatch])


    
    // const callApi = (string) => {
    //     fetch(`https://api.giphy.com/v1/gifs/trending?q=${string}&api_key=${API_KEY}`)
    //     .then((res) => res.json())
    //     .then((response)=>  setData(response.data))
    // }
    // useEffect(()=> {
    //     callApi()
    // },[])
    // console.log(data)

    return(
        <div>
            {
                db.map((data)=>(
                    <div key={data.id}>
                        <h2>{data.first_name}</h2>
                        <h2>{data.last_name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default DataItem;