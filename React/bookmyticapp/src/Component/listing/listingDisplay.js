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
                        <div className="design"><p>THEATRE</p></div> 
                           <img src={item.Theatre_thumb} alt={item.Theatre_name} className="Image"/>
                           <div className="theatre_name">
                                {item.Theatre_name}
                           <div className="city_name">{item.location_name}</div><br/><br/>
                        </div>
                        </div>    
                        <div>
                        <div className="design"><p>PRESENT MOVIES</p></div> 
                            {/* <div className="Tilecontainer"> 
                            <div className="tileComponent1">
                                   {item.Movies[0].Movie_Title}<br/>  
                                    <img src={item.Theatre_thumb} alt={item.Theatre_name} className="rounded float-left"/>
                                   {item.Movies[1].Movie_Title}<br/>
                                    <img src={item.Theatre_thumb} alt={item.Theatre_name} className="rounded float-right"/>
                                </div>
                           </div>  */}
                           <div class="row">
                                <div class="column movie1">
                                   <img src={item.Movie_img1} alt={item.Movie_Title}/>
                                   <Link to ={`/details/${item.Theatre_id}`}>
                                        <button>BOOK TICKETS</button>;
                                   </Link>
                                </div>
                                <div class="column movie2">
                                <img src={item.Movie_img2} alt={item.Movie_Title}/>
                                <Link to ={`/details/${item.Theatre_id}`}>
                                        <button>BOOK TICKETS</button>;
                                </Link>
                                </div>
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
                    <h2 className="logostyle">Loading</h2>
                    <img src="/images/loader.gif" alt="loader"/>
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