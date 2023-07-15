import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () =>{
     return (
    <>
    <header>
    <nav class="fnav">
        <div>
        <Link href="https://imgbb.com/"><img src="https://i.ibb.co/VQMMjVH/Screenshot-2023-06-23-075502.png" alt="logo" border="0"/></Link>
        <Link className='btn btn-info homebutton' to="/">Home</Link>
        </div>
        <p class="name">BOOK MY TIC</p>
        <div class="right">
            <a class="fright"  href="#LOGIN">LOGIN</a> 
            <a class="sign"   href="#signin"><button>Sign In</button></a>  
        </div>
    </nav>    
    </header>
    </>
     )
     }     

export default Header;