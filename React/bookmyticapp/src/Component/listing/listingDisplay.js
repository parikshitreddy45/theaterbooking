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
                           <img src={item.Theatre_thumb} alt={item.Theatre_name} className="Image"/>
                        </div>    
                        <div className="col-md-7">
                           <div className="hotel_name">
                                <Link to ={`/details?Theatre_id=${item.Theatre_id}`}>
                                    {item.Theatre_name}
                                </Link>
                           </div>
                           <div className="city_name">{item.location_name}</div><br/><br/>
                           <h4>PRESENT MOVIES:</h4>
                           <div className="labelDiv"> 
                                <span className="label label-primary">
                                   {item.Movies[0].Movie_Title}
                                </span> &nbsp;&nbsp;
                                <span className="label label-success">
                                   {item.Movies[1].Movie_Title}
                                </span>
                           </div>
                           <div>

                           </div>
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