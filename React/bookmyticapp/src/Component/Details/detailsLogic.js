import React,{useState,useEffect} from "react";
import './details.css';
import axios from "axios";
import './seatingarr.css';
// import {Link} from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const base_url ="https://bookmytic.onrender.com";
// ... (previous code)

const DetailDisplay = () => {
    let [searchParams] = useSearchParams();
    let [theatreDetails, settheatreDetails] = useState();
    let Theatreid = searchParams.getAll('Theatreid');
    const theatreDetail = async () => {
        const rdata = await axios.get(`${base_url}/details/${Theatreid}`);
        settheatreDetails(rdata.data[0]);
    }

    useEffect(() => {
        theatreDetail();
    });

    const renderDetails = () => {
        if (theatreDetails) {
            return (
                <>
                    {/* <div className="seating-interface">
                        {Array.from({ length: 10 }, (_, row) => (
                            <div key={`row-${row}`} className="seating-row">
                                {Array.from({ length: 10 }, (_, seat) => (
                                    <div key={`seat-${row}-${seat}`} className="seat available">
                                        {String.fromCharCode(65 + row)}{seat + 1}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div> */}
                </>
            );
        }
    };

    // Call the renderDetails function here
    const seatingDetails = renderDetails();

    return (
        <>
            {/* <div className='main'>
                Provided HTML code goes here
                <h1>Theater Seating</h1>
                <div className="controls">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" />
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" />
                </div>
                <div className="seating-plan"> */}
                    {/* Generate 100 seats dynamically */}
                    {/* {Array.from({ length: 100 }, (_, seat) => (
                        <div key={`seat-${seat}`} className="seat available">
                            {seat + 1}
                        </div>
                    ))}
                </div>
                <div className="legend">
                    <div className="legend-item">
                        <div className="seat available"></div>
                        <span>Available</span>
                    </div>
                    <div className="legend-item">
                        <div className="seat selected"></div>
                        <span>Selected</span>
                    </div>
                    <div className="legend-item">
                        <div className="seat booked"></div>
                        <span>Booked</span>
                    </div>
                </div>
                <button id="book-button">Book Tickets</button>
                <p id="total-price">Total Price: $0</p>
            </div>

            <script src="/yScript.js"></script> */}
        </>
    );
};

export default DetailDisplay;


// const DetailDisplay = () =>{
//     let [searchParams] = useSearchParams()
//     let [theatreDetails,settheatreDetails] = useState()
//     let Theatreid = searchParams.getAll('Theatreid')
//     const theatreDetail = async() =>{
//         const rdata = await axios.get(`${base_url}/details/${Theatreid}`);
//         settheatreDetails(rdata.data[0])
//     }


//      useEffect(() => {
//         theatreDetail()
//      }) 
//      const renderDetails = () => {
//         if(theatreDetails){
//             <>
//             <div className="seating-interface">
//                 {Array.from({ length: 10 }, (_, row) => (
//                     <div key={`row-${row}`} className="seating-row">
//                         {Array.from({ length: 10 }, (_, seat) => (
//                             <div key={`seat-${row}-${seat}`} className="seat available">
//                                 {String.fromCharCode(65 + row)}{seat + 1}
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </>
// }
// };

// return (
//     <>
//        <div className='main'>
//                 {/* Provided HTML code goes here */}
//                 <h1>Theater Seating</h1>
//                 <div className="controls">
//                     <label htmlFor="date">Date:</label>
//                     <input type="date" id="date" />
//                     <label htmlFor="time">Time:</label>
//                     <input type="time" id="time" />
//                 </div>
//                 <div className="seating-plan">
//                     {/* Generate 100 seats dynamically */}
//                     {Array.from({ length: 100 }, (_, seat) => (
//                         <div key={`seat-${seat}`} className="seat available">
//                             {seat + 1}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="legend">
//                     <div className="legend-item">
//                         <div className="seat available"></div>
//                         <span>Available</span>
//                     </div>
//                     <div className="legend-item">
//                         <div className="seat selected"></div>
//                         <span>Selected</span>
//                     </div>
//                     <div className="legend-item">
//                         <div className="seat booked"></div>
//                         <span>Booked</span>
//                     </div>
//                 </div>
//                 <button id="book-button">Book Tickets</button>
//                 <p id="total-price">Total Price: $0</p>
//             </div>

//         <script src="/yScript.js"></script>
//     </>
// );
// };

// export default DetailDisplay;







        
        
        
        
        
        





// <div className='tileImage'>
//                     <div className='imageClass'>
//                         {/* <img src={theatreDetails.Movie_img1}
//                         alt={theatreDetails.Theatre_name}/> */}
//                     </div>
//                     </div>
//                     <div className='tileContent'>
//                         <div className='content'>
//                             <h1>{theatreDetails.Theatre_name}</h1>
//                             {/* {theatreDetails.seats} */}
//                             <h3>Price : Rs. 450</h3>
//                         </div>
//                         <hr/>
//                             <div className="col-md-12">
//                             <Link className="btn btn-danger"
//                             to={`/listing/${Theatreid}`}>Back</Link> &nbsp;&nbsp;
//                             <button className="btn btn-success upgo" onClick={this}>Procced</button>
//                         </div>
//                         </div>
