import React ,{useState,useEffect} from 'react';
import './QuickSearch.css';
const base_url ="https://bookmytic.onrender.com";

const QuickSearch =() =>{
   const [movieType,setMovieType]= useState();

    useEffect(()=>{
      fetch(`${base_url}/movies`,{method:'GET'})
      .then((res)=>res.json())
      .then((data)=>{
            setMovieType(data)
      })
    },[])
    const renderstate= (data) =>{
      if (data){
        return data.map((item) =>{
            return (
               <option key={item._id} value={item.state_id}>
                   {item.state}
               </option>
            )
        })
      }
}
     return (
        <>
          <div id="QuickSearch">
            <p class="QuickHeading">RECOMMENDED MOVIES</p>
            <div class="MainBox">
               <div class="Titlecontainer">
                  <div>
                   <a href="https://ibb.co/RcKyfgj"><img src="https://i.ibb.co/RcKyfgj/Screenshot-2023-06-01-233030.png"   alt="mve8" border="0"/></a>
                  </div>   
               </div>
               <div class="Titlecontainer">
                 <div>
                 <a href="https://ibb.co/B37PCFt"><img src="https://i.ibb.co/B37PCFt/Screenshot-2023-06-01-233109.png" alt="mve7" border="0"/></a>
                  </div>  
               </div>
               <div class="Titlecontainer">
                <div>
                <a href="https://ibb.co/y64ZCv1"><img src="https://i.ibb.co/y64ZCv1/Screenshot-2023-06-01-233236.png" alt="mve2" border="0"/></a>
                  </div>  
               </div>
               <div class="Titlecontainer">
                <div>
                <a href="https://ibb.co/NWXrb0w"><img src="https://i.ibb.co/NWXrb0w/Screenshot-2023-06-01-233705.png" alt="mve3" border="0"/></a>
                  </div>  
               </div>
               <div class="Titlecontainer">
                <div>
                <a href="https://ibb.co/t2JjpBD"><img src="https://i.ibb.co/t2JjpBD/Screenshot-2023-06-01-233333.png" alt="mve1" border="0"/></a>
                  </div>  
               </div>
               <div class="Titlecontainer">
                <div>
                <a href="https://ibb.co/dcCz8tG"><img src="https://i.ibb.co/dcCz8tG/Screenshot-2023-06-01-233503.png" alt="mve4" border="0"/></a>
                  </div>  
               </div>
               <div class="Titlecontainer">
                <div>
                <a href="https://ibb.co/t2zrWjP"><img src="https://i.ibb.co/t2zrWjP/Screenshot-2023-06-01-233543.png" alt="mve5" border="0"/></a>
                  </div>  
               </div>
               <div class="Titlecontainer">
                <div>
                <a href="https://ibb.co/6ZkdvwH"><img src="https://i.ibb.co/6ZkdvwH/Screenshot-2023-06-01-233623.png" alt="mve6" border="0"/></a>
                  </div>  
               </div>
            </div>
          </div>
        </>
     )
}

export default QuickSearch;