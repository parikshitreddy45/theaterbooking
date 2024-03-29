import React,{useState} from "react";
import {Link} from "react-router-dom";
import SeatingInterface from "./SeatingInterface";
// import TicketBookingInterface from "./TicketBookingInterface";




const ListingDisplay = (props) =>{
      const [showSeatingInterface, setShowSeatingInterface] = useState(false);

  const handleBookTicketsClick = () => {
    // When "BOOK TICKETS" button is clicked, show the SeatingInterface
    setShowSeatingInterface(true);
  };

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
                                   {/* <Link to={`/details?Theatreid=${item.Theatre_id}`}>
                                        <button>BOOK TICKETS</button>
                                   </Link> */}
                                     <Link to={`/details?Theatreid=${item.Theatre_id}`}>
                                        <button onClick={handleBookTicketsClick} >BOOK TICKETS</button>
                                   </Link>
                                </div>
                                <div class="column movie2">
                                <img src={item.Movie_img2} alt={item.Movie_Title}/>
                                <Link to={`/details?Theatreid=${item.Theatre_id}`}>
                                        <button onClick={handleBookTicketsClick}>BOOK TICKETS</button>
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

       {showSeatingInterface && <SeatingInterface />}
     </div>
  );
    }
export default ListingDisplay;



// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// import SeatingInterface from "./SeatingInterface";

// const ListingDisplay = (props) => {
//   const [showSeatingInterface, setShowSeatingInterface] = useState(false);

//   const handleBookTicketsClick = () => {
//     // When "BOOK TICKETS" button is clicked, show the SeatingInterface
//     setShowSeatingInterface(true);
//   };

//   const renderData = ({ listData }) => {
//     // ... Your existing code ...

//     return listData.map((item) => {
//       return (
//         <div className="item" key={item._id}>
//           {/* ... Your existing code ... */}
//           <div class="column movie1">
//             <img src={item.Movie_img1} alt={item.Movie_Title} />
//             {/* Use onClick to call handleBookTicketsClick when the button is clicked */}
//             <button onClick={handleBookTicketsClick}>BOOK TICKETS</button>
//           </div>
//           <div class="column movie2">
//             <img src={item.Movie_img2} alt={item.Movie_Title} />
//             <button onClick={handleBookTicketsClick}>BOOK TICKETS</button>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div id="content">
//       {renderData(props)}
//       {/* Render the SeatingInterface component conditionally */}
//       {showSeatingInterface && <SeatingInterface />}
//     </div>
//   );
// };

// export default ListingDisplay;