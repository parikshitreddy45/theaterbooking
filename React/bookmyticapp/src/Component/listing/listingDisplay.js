import React from "react";
import {Link} from "react-router-dom";


const ListingDisplay = (props) =>{

    const renderData = ({listData}) =>{
      if(listData){ 
        if(listData.length>0){
            return listData.map((item) => {
               return(
                <div className="item" key={item._id}>
                    <div className="row">
                        <div className="col-md-5">
                           <img src={item.} alt={item}/>
                        </div>    
                        <div className="col-md-7">

                        </div>
                    </div>

                </div>
               )
            })
        }else{
            return(
                <h2>No Data Found</h2>
            )
        }
    }else {
        return(
                <div>
                    <h2>Loading</h2>
                    <img src="images/loader.gif" alt="loader"/>
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


export default ListingDisplay