import React from 'react';
import {BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/home';
import Main from './Home/Main';
import Listing from './listing/listinglogic';
import DetailDisplay from './Details/detailsLogic';
import SeatingInterface from './listing/SeatingInterface';


const Routing =() =>{
    return(
        <div>
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}>
                            <Route index element={<Home/>}/>
                            <Route path="home" element={<Home/>}/>
                            <Route path="listing/:Movie_id" element={<Listing/>}/>
                            <Route path="details" element={< DetailDisplay/>}/>
                            <Route path="seating" element={<SeatingInterface />} />
                        </Route>
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing
