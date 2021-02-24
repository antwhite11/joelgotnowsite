import React from "react"
import "./previousSongs.css"
import cover from "./ecstacycover.jpeg"
import mfy from "./SSJ.JPG"
import apple from "./musicicons/apple.png"
import spotify from "./musicicons/spotify.png"


function Previoussongs (){

return(


    <div>
<div className= "container  titlesContainer">
    <div className ="row">
       
        <div className= "col-md-4 ecsMarg">
            <div className= "songTitles col-md-12">

                ECSTACY




            </div>
          
            <div className="outNow col-md-12">

                Out Now.


            </div>

            <div className= "ecsCover col md-12">

            <a href="https://open.spotify.com/track/4gTLFNRfTRpIb94JGmwf3L?si=615e883f42d04960"><img className= "ecsSize" src={cover} alt="logo" /> </a>


            </div>





        </div>


        


        

       

        <div className= "col-md-6">
            <div className= "songTitles col-md-12">

                MADE FOR YOU




            </div>
          
            <div className="outNow col-md-12">

                Out Now.


            </div>

            <div className= "ecsCover col md-12">

            <a href="https://soundcloud.com/joelgotnext/made-for-you"><img className= "ecsSize" src={mfy} alt="logo" /></a>


            </div>





        </div>

      







</div>



</div>


<div className="followText"> Follow <strong>JoélGotNow</strong> on Apple Music and Spotify</div>


<div className= "container iconsBottom">
<div className = "row iconsRow">
 <div className = "col-sm-2 iconsMarg">
   <a href="https://music.apple.com/us/artist/joélgotnow/1549302635" ><img className="musicIcons" src={apple} alt="apple"></img></a>


 </div>

<div className="col-sm-5">
<a href="https://open.spotify.com/artist/4t65UhFdhuMgHsvLe4kzfD?si=D4XrKp8TSIqnY4MCBBGzpw"><img className="musicIcons2" src={spotify} alt="spotify"></img></a>



</div>



</div>




</div>





</div>


)



}


export default Previoussongs