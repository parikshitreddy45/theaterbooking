import React,{useState,useEffect} from "react";
import './details.css';
import axios from 'axios';
import {Link} from 'react-dom';
import {useParams,useSearchParams} from "react-router-dom";
//movieshows

const base_url ="https://bookmytic.onrender.com";

const DetailDisplay =() =>{

   let [searchParams] = useSearchParams()
   let [theatreDetails,settheatreDetails] = useState()
   let theatreId = searchParams.getAll(' ');
   const showDetail = async() => {
        const rdata = await axios.get(`${base_url}/Category?/${theatreId}`);
        settheatreDetails(rdata.data)
   }
   useEffect (() =>{
      showDetail(theatreDetails)
   },[])

   const renderDetails = () =>{
      if(theatreDetails){
         return (
            <>
                  <div className="titleImage">
                  <div>
                     <img src={theatreDetails.Theatre_thumb} alt={theatreDetails.Theatre_name}/>
                  </div>
                  </div>
                  <div className="titleContent"></div>
                     <div className="content">
                        <h1>{theatreDetails.Theatre_name}</h1>
                     </div>



            </>
         )
      }
   }
    return(
       <>
            <div className="main">

               </div>
       </>
    )
}

export default DetailDisplay