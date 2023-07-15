import React from "react";
import {Link} from "react-router-dom";
 
const listingDisplay =(props) =>{
    const renderData=({listData})=>{
       if(listData){
           if(listData.length>0){
            return(
                <h1>Data</h1>
            )
       }else{
           return(
            <h1>
                Data Not Found
            </h1>
           )
       }   
    }else{
        return(
            <div>
              <h2>Loading</h2>
              <img src="/images/loader.gif" alt="loader"></img>
            </div>
        )
    }
    }    
    return(
       <div id="content">
          {renderData(props)}
       </div>
    )
}
export  default listingDisplay;