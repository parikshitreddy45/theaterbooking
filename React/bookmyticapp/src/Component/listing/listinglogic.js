import React ,{useState,useEffect} from 'react';
import './listing.css';
import {useParams} from 'react-router-dom';
import listingDisplay from './listingDisplay';
import axios from 'axios';

const base_url ="https://bookmytic.onrender.com";

const Listing =()=>{
    let params = useParams()

    const [TheatreList,setTheatreList] = useState();

    useEffect(() =>{
      let movieid =params.MovieId;
      axios.get(`${base_url}/movies?MovieId=${movieid}`) 
      .then((res)=>{
        setTheatreList(res.data)
      })
    },[])
    return(
        <>
            <h1>listing</h1>
            <listingDisplay listData={TheatreList}/>
        </>
    )

}


export default Listing;

