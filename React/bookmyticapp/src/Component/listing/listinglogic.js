import React,{useState,useEffect} from "react";
import './listing.css';
import { useParams } from "react-router-dom";
import ListingDisplay from "./listingDisplay";
import axios from 'axios';

const base_url ="https://bookmytic.onrender.com";

const Listing = () =>{
    let params = useParams();
    const [TheatreList,settheatreList] =useState();

    useEffect(() =>{
        let movieid = params.Movie_id;
        axios.get(`${base_url}/Category?MovieId=${movieid}`)
        .then((res) =>{
            settheatreList(res.data)
        })
    },[])
    return (
        <>
            <div className='row'>
                <div id='mainListing'>
                    <div id="filter">

                    </div>
                    <ListingDisplay listData={TheatreList}/>
                </div>
            </div>
        </>
    )
}

export default Listing


