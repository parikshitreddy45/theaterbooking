// import React from 'react';
// import {Link} from 'react-router-dom';

// const QuickDisplay = (props)=>{
  
//     const   ListMovie = ({movieData}) =>{
//            return movieData.map((item)=>{
//                return(
//                 <Link to="/" key={item.Movie_id}>
//                  <div class="Titlecontainer">
//                   <div>
//                    <img src="https://i.ibb.co/RcKyfgj/Screenshot-2023-06-01-233030.png"   alt="mve8"/>
//                   </div>   
//                  </div>
//                 </Link>
//                )
//            })
//     }
//     return(
//         <div class="MainBox">
//             {ListMovie(props)}
//         </div>
//     )
// }
// export default QuickDisplay;


import React from 'react';
import {Link} from 'react-router-dom';


const QuickDisplay = (props) => {

    const listmovie = ({movieData}) => {
        if(movieData){
            return movieData.map((item) => {
                return(
                    <Link to={`/listing/${item.Movie_id}`}>
                        <div className="tileContainer"> 
                            <div className="tileComponent1">
                                <img src={item.Movie_img}/>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="mainBox">
            {listmovie(props)} 
        </div>
    )
}

export default QuickDisplay;