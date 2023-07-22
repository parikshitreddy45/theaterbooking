import React,{useState,useEffect} from "react";
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useSearchParams} from "react-router-dom";
//movieshows

const base_url ="https://bookmytic.onrender.com";

const DetailDisplay =() =>{

   let [searchParams] = useSearchParams()
   let [showDetails,setshowDetails] = useState()
   let Theatre_id = searchParams.getAll('Theatre_id');
   const showDetail = async() => {
        const rdata = await axios.get(`${base_url}/details?/${Theatre_id}`);
        setshowDetails(rdata)
   }
   useEffect (() =>{
      showDetail(showDetails)
   },[])

   const renderDetails = () =>{
      if(showDetails){
         return (
            <>
           <Link> 
           </Link>
            
            </>
         )
      }
      }
      return(
         <>
         <div className='main'>
             {renderDetails()}
         </div>
         </>
      )
   }



export default DetailDisplay
