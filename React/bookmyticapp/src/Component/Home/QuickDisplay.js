import React from 'react';
import {Link} from 'react-router-dom';


const QuickDisplay = (props) => {

    const listmovie = ({movieData}) => {
        if(movieData){
            return movieData.map((item) => {
                return(
                    <Link to={`/listing/${item.Movie_id}`}>
                        <div className="Tilecontainer"> 
                            <div className="tileComponent1">
                                <img src={item.Movie_img} alt={item.Movie_Title}/>
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