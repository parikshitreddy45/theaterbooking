import React,{useState,useEffect} from 'react';
import './Search.css';

const base_url ="https://bookmytic.onrender.com";

const Search = () =>{
    const [city,setcity] = useState('')
    const [theatreData,settheatreData] = useState('')

    useEffect (() => {
        fetch(`${base_url}/cities`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setcity(data)
        })
    },[])
    const renderstate= (data) =>{
           if (data){
             return data.map((item) =>{
                 return (
                    <option key={item._id} value={item.state_id}>
                        {item.state}
                    </option>
                 )
             })
           }
    }
    const handlestate =(event)=>{
           console.log(event.target.value)
           let stateId=event.target.value;
           fetch(`${base_url}/Category?stateId=${stateId}`,{method:'GET'})
           .then((res) => res.json())
           .then((data) => {
            settheatreData(data)
        })
    }
    const rendertheatre= (data) =>{
        if (data){
          return data.map((item) =>{
              return (
                 <option key={item.Theatre_id} value={item.Theatre_id}>
                     {item.Theatre_name} |  {item.location_name}
                 </option>
              )
          })
        }
 }
     return (
            <>
              <div id="search">
                    <div id="heading">
                        FIND-MOVIES-IN-THEATRES
                    </div>    
                <div class="dropdown">
                    <select onChange={handlestate}>
                        <option>---SELECT YOUR CITY---</option>
                        {renderstate(city)}
                    </select>
                    <select id="theatreSelect">
                        <option>---SELECT YOUR THEATRES---</option>
                        {rendertheatre(theatreData)}
                    </select>
                </div>
            </div>
        </>
     )
}

export default Search;

        