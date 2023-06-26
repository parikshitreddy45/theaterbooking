import React ,{useState,useEffect} from 'react';
import './listing.css';
import listingDisplay from './listingDisplay';
import axios from 'axios';

const base_url ="https://bookmytic.onrender.com";

const Listing =()=>{
    return(
        <>
            <h1>listing</h1>
            <listingDisplay/>
        </>
    )

}



export default Listing;

