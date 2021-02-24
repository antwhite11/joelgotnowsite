import React from "react"
import joelcontact from "./joelcontact.jpeg"
import "./joelContact.css"





function Contactbody () {


return(



    <div>
    <div className="containter no-padding">
        <div className= "row">
            <div className= "col-md-5 joelContact">



            <img src={joelcontact} className="joelImg img-fluid" alt="joel"></img>







            </div>




            <div className = "col-md-4">

                <div className = "contactTxt">
                    <div className= "contactHeader">
                Contact JoélGotNow
                </div>

                <div className="contactaddy">

                    Email: joelgotnextmanagement@gmail.com
                    <br></br>
                    <br></br>
                    Phone: (470)588-2154




                </div>

                


                </div>


            </div>








        </div>






    </div>

    </div>



)






}


export default Contactbody