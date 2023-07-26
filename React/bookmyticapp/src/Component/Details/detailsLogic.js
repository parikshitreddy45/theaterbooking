import React,{useState,useEffect} from "react";
import './details.css';
import axios from "axios";
import {Link} from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const base_url ="https://bookmytic.onrender.com";

const DetailDisplay = () =>{
    let [searchParams] = useSearchParams()
    let [theatreDetails,settheatreDetails] = useState()
    let Theatreid = searchParams.getAll('Theatreid')
    const theatreDetail = async() =>{
        const rdata = await axios.get(`${base_url}/details/${Theatreid}`);
        settheatreDetails(rdata.data[0])
    }


     useEffect(() => {
        theatreDetail()
     },[])
     
    // const proceed = () => {
    //     navigate(`/placeOrder/${theatreDetails.Theatre_name}`)
    // }


 
     const renderDetails = () => {
        if(theatreDetails){
            return(
                <>
                     {/* <div className='tileImage'> */}
                    {/* <div className='imageClass'>
                        <img src={theatreDetails.Movie_img1}
                        alt={theatreDetails.Theatre_name}/>
                    </div> */}
                    {/* </div> */}
                    {/* <div className='tileContent'>
                        <div className='content'>
                            <h1>{theatreDetails.Theatre_name}</h1>
                            <h3>Price : Rs. 450</h3>
                        </div>
                        <hr/> */}
                            {/* <div className="col-md-12">
                            <Link className="btn btn-danger"
                            to={`/listing/${Theatreid}`}>Back</Link> &nbsp;&nbsp;
                            <button className="btn btn-success upgo" onClick={this}>Procced</button>
                        </div> */}
                    {/* </div>  */}
                    <title>Movie Seat Reservation</title>
    <div class="movie-container">
      <label> Movie:</label>
    </div>

    <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <div class="container">
      <div class="screen"></div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
    </div>

    <p class="text">
      Total prize for <span id="count">0</span> tickets =  $<span
        id="total"
        >0</span>
    </p>
    
    <script src="script.js"></script>
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

export default DetailDisplay;

