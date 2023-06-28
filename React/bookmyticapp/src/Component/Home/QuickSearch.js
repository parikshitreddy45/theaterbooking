import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'

const base_url ="https://bookmytic.onrender.com";

const QuickSearch = () => {

    const [movieType,setmovieType] = useState();

    useEffect(() => {
        fetch(`${base_url}/movies`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setmovieType(data)
        })
    },[])

    return(
        <>
            <div id="QuickSearch">
             <p class="QuickHeading">RECOMMENDED MOVIES</p>
             <QuickDisplay movieData={movieType}/>
            </div>
        </>
    )
}

export default QuickSearch;