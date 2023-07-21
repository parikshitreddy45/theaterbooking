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
   let theatreId = searchParams.getAll('Theatre_id');
   const showDetail = async() => {
        const rdata = await axios.get(`${base_url}/details?/${theatreId}`);
        settheatreDetails(rdata.data[0])
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
                     <img src={theatreDetails.Movies[0].Movie_img} alt={theatreDetails.Theatre_name}/>
                  </div>
                  </div>
                  <div className="titleContent"></div>
                     <div className="content">

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