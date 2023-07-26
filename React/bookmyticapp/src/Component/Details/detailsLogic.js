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
                    <div className='tileImage'>
                    <div className='imageClass'>
                        <img src={theatreDetails.Movie_img1}
                        alt={theatreDetails.Theatre_name}/>
                    </div>
                    </div>
                    <div className='tileContent'>
                        <div className='content'>
                            <h1>{theatreDetails.Theatre_name}</h1>
                            <span id="cfeedback">231 Customers Rating Average</span>
                            <h3>Old Price <del>Rs. 450</del></h3>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                                <div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                            <Link className="btn btn-danger"
                            to={`/listing/${Theatreid}`}>Back</Link> &nbsp;&nbsp;
                            <button className="btn btn-success">Procced</button>
                        </div>
                    </div>
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

