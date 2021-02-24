import React from "react";
import "./head.css";
import {Link} from "react-router-dom"



function Header(){


    var bgstyle ={

    backgroundColor : "black",
    color: "white",
   
   
    

    }


    var fontBig = {

        fontSize: "2rem"

    }

    var linkFloat = {

       marginLeft : "909px",
       marginTop : "12px"
    }

    var linkMargin= {

    marginLeft: "10px"
    
    }



    var linkColor = {

        color: "white"
    }

    
return(

    <nav className="navbar navbar-expand-lg container-fluid" style={bgstyle}>
       
        
            <span className ="navbar-brand mb-0" style={fontBig}>
                JoélGotNow

            </span>
      
       
          
              <div style={linkFloat}>
              
              <Link style={linkColor} to= "/contact"><span style={linkMargin}>Contact Us</span></Link>
           
            <Link style={linkColor} to="/about"><span style={linkMargin}>About</span></Link>
           
           <Link style={linkColor} to="/" onClick={()=>window.scrollTo(0,1580)}><span style={linkMargin}>Music</span></Link>
           
           
           <Link style={linkColor} to="/"><span style={linkMargin}>Home</span></Link>
              </div>
          
     
       
        </nav>
       




)



}



export default Header