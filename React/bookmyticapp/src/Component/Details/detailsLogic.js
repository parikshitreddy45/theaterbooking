import React,{useState,useEffect} from "react";
import './details.css';
import axios from 'axios';
import {useSearchParams} from "react-router-dom";


const base_url ="https://bookmytic.onrender.com";

const DetailDisplay =() =>{

   let [searchParams] = useSearchParams();
   let [theatreDetails,settheatreDetails] = useState()
   let theatreId = searchParams.getAll('TheatreId');
   const theatreDetail = async() =>{
      const rdata = await axios.get(`${base_url}/details/${theatreId}`);
      settheatreDetails(rdata.data[0])
   }

   useEffect(() =>{
      theatreDetail()
   },[])

   const renderDetails =() =>{
      if(theatreDetails){
         return(
             <>
             <div className="titleImage">
                  <div className="ImageClass">
                     <img src={theatreDetails.Theatre_thumb} alt={theatreDetails.Theatre_name}/>
                  </div>
               </div>
               <div className="titleContent">
                 <div className="content">
                      <h1>{theatreDetails.Theatre_name}</h1> 
                 </div>
               </div>             
             </>
         )
      }
   }

         return(
            <>
            <div className="main">
                {renderDetails()}
            </div>
            </>
         )
}            



export default DetailDisplay
